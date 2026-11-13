import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

interface DigitalSculptureProps {
  fallbackAlt: string;
}

function detectSoftwareWebGL(): { supported: boolean; isSoftwareGl: boolean } {
  try {
    const probeCanvas = document.createElement('canvas');
    const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
    if (!gl) {
      return { supported: false, isSoftwareGl: true };
    }
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) || '');
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    const isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    return { supported: true, isSoftwareGl };
  } catch {
    return { supported: false, isSoftwareGl: true };
  }
}

function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(256, 256, 20, 256, 256, 250);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
    grad.addColorStop(0.45, 'rgba(5, 8, 9, 0.45)');
    grad.addColorStop(1, 'rgba(9, 12, 13, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createSculptureCurve(phaseOffset: number, amplitudeScale: number): THREE.CatmullRomCurve3 {
  const points: THREE.Vector3[] = [];
  const count = 48;
  for (let i = 0; i <= count; i++) {
    const t = (i / count) * Math.PI * 2;
    const x = -5.6 + (i / count) * 11.2;
    const y =
      Math.sin(t * 1.45 + phaseOffset) * 1.15 * amplitudeScale +
      Math.cos(t * 2.3 + phaseOffset * 0.6) * 0.48 * amplitudeScale;
    const z =
      Math.cos(t * 1.2 + phaseOffset) * 1.35 * amplitudeScale -
      Math.sin(t * 2.1) * 0.42;
    points.push(new THREE.Vector3(x, y, z));
  }
  return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
}

export function DigitalSculpture({ fallbackAlt }: DigitalSculptureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setUseFallback(true);
      return;
    }

    const { supported, isSoftwareGl } = detectSoftwareWebGL();
    if (!supported) {
      setUseFallback(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: false,
        powerPreference: 'high-performance',
      });
    } catch {
      setUseFallback(true);
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = !isSoftwareGl && !isMobile;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';

    container.appendChild(renderer.domElement);

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setUseFallback(true);
    };
    const handleContextRestored = () => {
      setUseFallback(false);
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost);
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x090c0d);
    scene.fog = new THREE.FogExp2(0x090c0d, 0.065);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.45, isMobile ? 9.6 : 7.8);

    // Mandatory procedural studio environment map
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    const envTarget = pmremGenerator.fromScene(roomEnv, 0.04);
    scene.environment = envTarget.texture;
    roomEnv.dispose();
    pmremGenerator.dispose();

    // 3-Point Studio Lighting + Cool/Warm Contrast
    const hemiLight = new THREE.HemisphereLight(0xb6d49b, 0x090c0d, 0.55);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xf3f7f2, 2.2);
    keyLight.position.set(5, 7, 5);
    keyLight.castShadow = !isSoftwareGl && !isMobile;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 25;
    keyLight.shadow.camera.left = -6;
    keyLight.shadow.camera.right = 6;
    keyLight.shadow.camera.top = 6;
    keyLight.shadow.camera.bottom = -6;
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xa4b1a2, 0.9);
    fillLight.position.set(-6, 2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xb6d49b, 1.85);
    rimLight.position.set(1.5, 4.5, -6.5);
    scene.add(rimLight);

    let areaLight: THREE.RectAreaLight | null = null;
    if (!isSoftwareGl) {
      RectAreaLightUniformsLib.init();
      areaLight = new THREE.RectAreaLight(0xdde2dc, 4.2, 8, 2.5);
      areaLight.position.set(0, 5.5, 2.5);
      areaLight.lookAt(0, 0, 0);
      scene.add(areaLight);
    }

    // Composite Sculpture Group (Multi-Part Procedural Architecture)
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    const shaderUniforms = { uTime: { value: 0 } };

    // Part 1: Primary Liquid-Chrome Organic Wave Ribbon
    const primaryCurve = createSculptureCurve(0.25, 1.0);
    const tubularSegments = isMobile ? 120 : 200;
    const radialSegments = isMobile ? 24 : 36;
    const primaryGeo = new THREE.TubeGeometry(primaryCurve, tubularSegments, 0.68, radialSegments, false);
    const primaryMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xc8d2cc),
      metalness: 0.98,
      roughness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      envMapIntensity: 1.6,
      anisotropy: 0.75,
    });
    primaryMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = shaderUniforms.uTime;
      shader.vertexShader =
        `uniform float uTime;\n` +
        shader.vertexShader.replace(
          '#include <begin_vertex>',
          `
          #include <begin_vertex>
          float wave = sin(position.x * 1.4 + uTime * 0.75) * 0.075
                     + cos(position.z * 2.1 - uTime * 0.55) * 0.055;
          transformed += normal * wave;
          `
        );
    };
    const primaryMesh = new THREE.Mesh(primaryGeo, primaryMat);
    primaryMesh.castShadow = !isSoftwareGl && !isMobile;
    primaryMesh.receiveShadow = true;
    sculptureGroup.add(primaryMesh);

    // Part 2: Secondary Brushed-Titanium Intertwined Ribbon
    const secondaryCurve = createSculptureCurve(Math.PI * 0.72, 0.85);
    const secondaryGeo = new THREE.TubeGeometry(secondaryCurve, tubularSegments, 0.24, 24, false);
    const secondaryMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x74857a),
      metalness: 0.9,
      roughness: 0.34,
      clearcoat: 0.45,
      envMapIntensity: 1.2,
    });
    secondaryMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = shaderUniforms.uTime;
      shader.vertexShader =
        `uniform float uTime;\n` +
        shader.vertexShader.replace(
          '#include <begin_vertex>',
          `
          #include <begin_vertex>
          float pulse = cos(position.x * 1.8 - uTime * 0.9) * 0.03;
          transformed += normal * pulse;
          `
        );
    };
    const secondaryMesh = new THREE.Mesh(secondaryGeo, secondaryMat);
    secondaryMesh.castShadow = !isSoftwareGl && !isMobile;
    sculptureGroup.add(secondaryMesh);

    // Part 3: Inner Precision Signal Core Strand
    const coreCurve = createSculptureCurve(Math.PI * 1.35, 0.65);
    const coreGeo = new THREE.TubeGeometry(coreCurve, 120, 0.075, 16, false);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xb6d49b),
      emissive: new THREE.Color(0x2d4226),
      emissiveIntensity: 0.55,
      metalness: 0.82,
      roughness: 0.22,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // Part 4–6: Three Sculptural Metallic Droplet Satellites
    const nodeGeo = new THREE.IcosahedronGeometry(0.19, 4);
    const nodeMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xdde2dc),
      metalness: 0.98,
      roughness: 0.06,
      clearcoat: 1.0,
      envMapIntensity: 1.7,
    });
    const nodes: { mesh: THREE.Mesh; radiusX: number; radiusZ: number; speed: number; offset: number; yBase: number }[] = [
      { mesh: new THREE.Mesh(nodeGeo, nodeMat), radiusX: 3.1, radiusZ: 1.6, speed: 0.32, offset: 0.2, yBase: -1.1 },
      { mesh: new THREE.Mesh(nodeGeo, nodeMat), radiusX: 2.4, radiusZ: 1.9, speed: -0.26, offset: 2.4, yBase: 0.85 },
      { mesh: new THREE.Mesh(nodeGeo, nodeMat), radiusX: 4.1, radiusZ: 1.2, speed: 0.21, offset: 4.1, yBase: -0.6 },
    ];
    nodes.forEach((n, idx) => {
      const s = idx === 0 ? 1.0 : idx === 1 ? 0.65 : 0.48;
      n.mesh.scale.setScalar(s);
      n.mesh.castShadow = !isSoftwareGl && !isMobile;
      sculptureGroup.add(n.mesh);
    });

    // Grounded Dark Obsidian Studio Plane & Contact Shadow
    const floorGeo = new THREE.PlaneGeometry(36, 24);
    const floorMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x090c0d),
      metalness: 0.65,
      roughness: 0.38,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -2.15;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    const shadowTex = createContactShadowTexture();
    const contactGeo = new THREE.PlaneGeometry(11, 5.5);
    const contactMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.55,
    });
    const contactPlane = new THREE.Mesh(contactGeo, contactMat);
    contactPlane.rotation.x = -Math.PI / 2;
    contactPlane.position.y = -2.13;
    scene.add(contactPlane);

    // Subtle Atmospheric Studio Motes
    const particleCount = isMobile ? 45 : 90;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 1] = (Math.random() - 0.35) * 6;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xa4b1a2,
      size: 0.028,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    // Pointer & Scroll State (Zero GC in Loop)
    let targetPointerX = 0;
    let targetPointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;
    let scrollFactor = 0;

    const handlePointerMove = (e: PointerEvent) => {
      targetPointerX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetPointerY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      const chapter = document.getElementById('intro-chapter');
      if (chapter) {
        const total = Math.max(chapter.offsetHeight - window.innerHeight, window.innerHeight);
        scrollFactor = Math.min(Math.max(window.scrollY / total, 0), 1.2);
      } else {
        scrollFactor = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1.2);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.position.z = width < 768 ? 9.6 : 7.8;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop with Software-WebGL Pacing
    const clock = new THREE.Clock();
    let frameId = 0;
    let disposed = false;

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      if (!gl || typeof gl.fenceSync !== 'function') {
        frameId = window.setTimeout(cb, 80);
        return;
      }
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        if (disposed) {
          if (sync) gl.deleteSync(sync);
          return;
        }
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function tick() {
      if (disposed) return;
      const dt = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();

      shaderUniforms.uTime.value = elapsed;

      currentPointerX = THREE.MathUtils.damp(currentPointerX, targetPointerX, 3.2, dt);
      currentPointerY = THREE.MathUtils.damp(currentPointerY, targetPointerY, 3.2, dt);

      // Smooth spatial transition from Hero showcase (scrollFactor=0) into Identity backdrop (scrollFactor=1)
      const heroShiftX = width < 768 ? 0 : 1.15 - scrollFactor * 0.45;
      sculptureGroup.position.x = THREE.MathUtils.damp(sculptureGroup.position.x, heroShiftX, 3.0, dt);
      sculptureGroup.position.y = Math.sin(elapsed * 0.4) * 0.08 - scrollFactor * 0.35;
      sculptureGroup.rotation.y = Math.sin(elapsed * 0.22) * 0.14 + currentPointerX * 0.22 + scrollFactor * 0.85;
      sculptureGroup.rotation.x = Math.cos(elapsed * 0.18) * 0.06 + currentPointerY * 0.12 + scrollFactor * 0.18;

      // Orbit metallic droplet nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const angle = elapsed * n.speed + n.offset;
        n.mesh.position.set(
          Math.cos(angle) * n.radiusX,
          n.yBase + Math.sin(angle * 1.6) * 0.25,
          Math.sin(angle) * n.radiusZ
        );
      }

      particles.rotation.y = elapsed * 0.025;

      const baseZ = width < 768 ? 9.6 : 7.8;
      camera.position.x = THREE.MathUtils.damp(camera.position.x, currentPointerX * 0.45, 2.5, dt);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, 0.45 - currentPointerY * 0.25, 2.5, dt);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, baseZ + scrollFactor * 1.8, 2.5, dt);
      camera.lookAt(0, -0.05, 0);

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    if (isSoftwareGl) {
      afterDraw(tick);
    } else {
      frameId = requestAnimationFrame(tick);
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      window.clearTimeout(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);

      primaryGeo.dispose();
      primaryMat.dispose();
      secondaryGeo.dispose();
      secondaryMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      floorGeo.dispose();
      floorMat.dispose();
      contactGeo.dispose();
      contactMat.dispose();
      shadowTex.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      envTarget.dispose();
      if (areaLight) scene.remove(areaLight);

      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (useFallback) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#090C0D]">
        <img
          src="/assets/aistudio/Digital_Identity_8d0fe21f.jpeg"
          alt={fallbackAlt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#090C0D] via-[#090C0D]/55 to-[#090C0D]/40"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#090C0D]">
      <div ref={containerRef} className="w-full h-full" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090C0D] via-transparent to-[#090C0D]/45"
      />
    </div>
  );
}
