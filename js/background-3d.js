// js/background-3d.js - Interactive 3D particle constellation with Three.js

let scene, camera, renderer, particlesMesh, linesMesh;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
const particleCount = 110;
const maxDistance = 2.4;
let positions, velocities;
let isPulseActive = false;
let pulseFactor = 1.0;

function init3DBackground() {
  const container = document.getElementById('bg-canvas');
  if (!container) return;

  // Scene setup
  scene = new THREE.Scene();

  // Camera setup
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 7;

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Particle positions & velocities setup
  positions = new Float32Array(particleCount * 3);
  velocities = [];

  const spread = 9.5;
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.5;

    velocities.push({
      x: (Math.random() - 0.5) * 0.0035,
      y: (Math.random() - 0.5) * 0.0035,
      z: (Math.random() - 0.5) * 0.002
    });
  }

  // Particle Geometry & Material
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Custom point circle canvas texture for glowing particles
  const particleCanvas = document.createElement('canvas');
  particleCanvas.width = 32;
  particleCanvas.height = 32;
  const ctx = particleCanvas.getContext('2d');
  const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, 'rgba(56, 189, 248, 1)');
  grad.addColorStop(0.3, 'rgba(37, 99, 235, 0.8)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(16, 16, 16, 0, Math.PI * 2);
  ctx.fill();

  const particleTexture = new THREE.CanvasTexture(particleCanvas);

  const particleMat = new THREE.PointsMaterial({
    size: 0.28,
    map: particleTexture,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  particlesMesh = new THREE.Points(particleGeo, particleMat);
  scene.add(particlesMesh);

  // Line Mesh for connections
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.16,
    blending: THREE.AdditiveBlending
  });

  const lineGeo = new THREE.BufferGeometry();
  linesMesh = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(linesMesh);

  // Event Listeners
  window.addEventListener('resize', onWindowResize, false);
  window.addEventListener('mousemove', onMouseMove, false);

  animate();
}

function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(e) {
  mouseX = (e.clientX - window.innerWidth / 2) * 0.0008;
  mouseY = (e.clientY - window.innerHeight / 2) * 0.0008;
}

// Particle pulse effect when changing slides
function triggerSlideParticlePulse() {
  pulseFactor = 3.6;
  if (particlesMesh && particlesMesh.material) {
    particlesMesh.material.size = 0.45;
  }
}

function animate() {
  requestAnimationFrame(animate);

  // Smooth mouse parallax
  targetX += (mouseX - targetX) * 0.05;
  targetY += (mouseY - targetY) * 0.05;
  scene.rotation.y = targetX;
  scene.rotation.x = targetY;

  // Pulse dampening
  if (pulseFactor > 1.0) {
    pulseFactor += (1.0 - pulseFactor) * 0.06;
    if (particlesMesh && particlesMesh.material) {
      particlesMesh.material.size += (0.28 - particlesMesh.material.size) * 0.06;
    }
  }

  // Update particles
  const posArr = particlesMesh.geometry.attributes.position.array;
  const spread = 9.5;

  for (let i = 0; i < particleCount; i++) {
    const idx = i * 3;
    posArr[idx] += velocities[i].x * pulseFactor;
    posArr[idx + 1] += velocities[i].y * pulseFactor;
    posArr[idx + 2] += velocities[i].z * pulseFactor;

    // Boundary wrap
    if (Math.abs(posArr[idx]) > spread / 2) velocities[i].x *= -1;
    if (Math.abs(posArr[idx + 1]) > spread / 2) velocities[i].y *= -1;
    if (Math.abs(posArr[idx + 2]) > spread * 0.25) velocities[i].z *= -1;
  }
  particlesMesh.geometry.attributes.position.needsUpdate = true;

  // Build connecting lines dynamically
  const linePositions = [];
  for (let i = 0; i < particleCount; i++) {
    for (let j = i + 1; j < particleCount; j++) {
      const dx = posArr[i * 3] - posArr[j * 3];
      const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
      const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < maxDistance) {
        linePositions.push(
          posArr[i * 3], posArr[i * 3 + 1], posArr[i * 3 + 2],
          posArr[j * 3], posArr[j * 3 + 1], posArr[j * 3 + 2]
        );
      }
    }
  }

  linesMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

  renderer.render(scene, camera);
}

window.addEventListener('DOMContentLoaded', init3DBackground);
