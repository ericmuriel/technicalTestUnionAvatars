import React, { useState, useEffect, memo } from "react";
import { Camera, Scene } from 'three';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';



const RenderAvatar = ({ avatarUrl }) => {
    useEffect(() => {
        if (document.getElementsByTagName("canvas").length === 0) {

            //THREE.JS OBJECTS AND CHARACTER RENDER
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            document.body.appendChild(renderer.domElement);
            const scene = new THREE.Scene();
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }
            renderer.setSize(sizes.width, sizes.height)

            const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)
            camera.position.set(6, 6, 6);

            renderer.setClearColor(0xA3A3A3);
            const orbit = new OrbitControls(camera, renderer.domElement)
            orbit.update();

            //ADD OPTIONAL GRID 
            const grid = new THREE.GridHelper(30, 30);
            scene.add(grid);

            //AMBIENT LIGHT
            const ambientLight = new THREE.AmbientLight(0xededed, 0.8);
            scene.add(ambientLight);

            //DIRECTIONAL LIGHT
            const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
            scene.add(directionalLight);
            directionalLight.position.set(10, 11, 7);

            const gltfLoader = new GLTFLoader();
            const rgbeLoader = new RGBELoader();

            let eric;
            gltfLoader.load(avatarUrl, function (glb) {
                const model = glb.scene;
                scene.add(model);
                return ''
                //eric = model;
            })

            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
            renderer.shadowMap.enabled = true;
            renderer.gammaOuput = true;

            function animate(time) {
                //ADDING AUTO-ROTATION ANIMATION
                //if (eric)
                //eric.rotation.y = -time / 3000
                renderer.render(scene, camera)
            }
            renderer.setAnimationLoop(animate)
        }
    }, [])
}

export default memo(RenderAvatar)