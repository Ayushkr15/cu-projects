
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeJSBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    // Position and color particles
    for (let i = 0; i < particlesCount; i++) {
      // Positions - spread across screen but concentrated in center
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      // Colors - blue/light blue gradient
      colors[i * 3] = 0.5 + Math.random() * 0.5; // R: 0.5-1.0
      colors[i * 3 + 1] = 0.7 + Math.random() * 0.3; // G: 0.7-1.0
      colors[i * 3 + 2] = 0.9 + Math.random() * 0.1; // B: 0.9-1.0
    }
    
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    );
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      sizeAttenuation: true,
      depthWrite: false,
    });
    
    // Create the particle system
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);
    
    // Handle mouse movement for interactive effect
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particle system slightly based on mouse position
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.0005;
      
      particleSystem.rotation.x += mousePosition.current.y * 0.0005;
      particleSystem.rotation.y += mousePosition.current.x * 0.0005;
      
      // Render
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ThreeJSBackground;
