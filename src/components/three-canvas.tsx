'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { useTheme } from 'next-themes';
import gsap from 'gsap';

export function ThreeCanvas({ letter, count = 1, sceneType = 'default' }: { letter?: string; count?: number; sceneType?: 'default' | 'contact' }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;
    const allShapes: THREE.Mesh[] = [];

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
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 3);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    if (sceneType === 'contact') {
        camera.position.z = 4;
        const fontLoader = new FontLoader();
        fontLoader.load(
            'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json',
            (font) => {
                const textGeometry = new TextGeometry('Shail Vania', {
                    font: font, size: 0.5, depth: 0.2, curveSegments: 12, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02, bevelOffset: 0, bevelSegments: 5
                });
                textGeometry.center();
                const textMaterial = new THREE.MeshStandardMaterial({ color: objectColor, metalness: 0.8, roughness: 0.1 });
                const text = new THREE.Mesh(textGeometry, textMaterial);
                scene.add(text);

                const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
                const sphereGeometry = new THREE.SphereGeometry(0.3, 16, 16);
                const cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
                const shapeMaterial = new THREE.MeshNormalMaterial();

                const createShape = (geometry: THREE.BufferGeometry) => {
                    const shape = new THREE.Mesh(geometry, shapeMaterial);
                    shape.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
                    shape.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
                    const scale = Math.random();
                    shape.scale.set(scale, scale, scale);
                    scene.add(shape);
                    allShapes.push(shape);
                };

                for (let i = 0; i < 30; i++) createShape(cubeGeometry);
                for (let i = 0; i < 30; i++) createShape(sphereGeometry);
                for (let i = 0; i < 40; i++) createShape(donutGeometry);

                allShapes.forEach((shape) => {
                    const directionX = Math.random() < 0.5 ? "+=" : "-=";
                    const directionY = Math.random() < 0.5 ? "+=" : "-=";
                    gsap.to(shape.rotation, {
                        duration: 50 + Math.random() * 20,
                        x: `${directionX}${Math.PI * 2}`,
                        y: `${directionY}${Math.PI * 2}`,
                        repeat: -1,
                        ease: 'none'
                    });
                });
            }
        );
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

    } else {
        // Default animation
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
          const scale = Math.random() * 0.6 + 0.3;
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
        const animate = () => {
          animationFrameId = requestAnimationFrame(animate);
          shapes.forEach(shape => {
            shape.rotation.x += 0.002;
            shape.rotation.y += 0.002;
          });
          renderer.render(scene, camera);
        };
        animate();
    }


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
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationFrameId);
      gsap.killTweensOf(allShapes);
    };
  }, [letter, count, theme, sceneType]);

  return <div ref={mountRef} className="fixed inset-0 z-[-1] blur-sm" />;
}
