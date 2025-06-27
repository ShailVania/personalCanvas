'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { useTheme } from 'next-themes';

export function ThreeCanvas({ letter, count = 1 }: { letter?: string; count?: number }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Use a bright color for dark theme and a dark color for light theme
    const objectColor = theme === 'dark' ? 0xffffff : 0x144552;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    
    // Material
    const material = new THREE.MeshStandardMaterial({
      color: objectColor,
      metalness: 0.8,
      roughness: 0.1,
      transparent: true,
      opacity: 0.2,
    });
    
    const shapes: THREE.Mesh[] = [];

    const addRandomizedShape = (geometry: THREE.BufferGeometry) => {
      const shape = new THREE.Mesh(geometry, material);
      const scale = Math.random() * 0.4 + 0.1;
      shape.scale.set(scale, scale, scale);
      shape.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      shape.rotation.set(
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI
      );
      shapes.push(shape);
      scene.add(shape);
    };

    if (letter) {
      const fontLoader = new FontLoader();
      fontLoader.load(
        'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json',
        (font) => {
          if (count > 1) {
            for (let i = 0; i < count; i++) {
              const textGeometry = new TextGeometry(letter, {
                font: font, size: 1, depth: 0.2, curveSegments: 6, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.02, bevelSegments: 3
              });
              textGeometry.center();
              addRandomizedShape(textGeometry);
            }
          } else {
             const textGeometry = new TextGeometry(letter, {
              font: font,
              size: 2.5,
              depth: 0.5,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 0.1,
              bevelSize: 0.05,
              bevelOffset: 0,
              bevelSegments: 5,
            });
            textGeometry.center();
            const shape = new THREE.Mesh(textGeometry, material);
            shapes.push(shape);
            scene.add(shape);
          }
        }
      );
    } else {
      if (count > 1) {
        for (let i = 0; i < count; i++) {
          const geometry = new THREE.IcosahedronGeometry(0.8, 1);
          addRandomizedShape(geometry);
        }
      } else {
        const geometry = new THREE.IcosahedronGeometry(1.5, 1);
        const shape = new THREE.Mesh(geometry, material);
        shapes.push(shape);
        scene.add(shape);
      }
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 3);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      shapes.forEach(shape => {
        shape.rotation.x += 0.002;
        shape.rotation.y += 0.002;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if(currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [letter, theme, count]);

  return <div ref={mountRef} className="fixed inset-0 z-[-1] blur-sm" />;
}
