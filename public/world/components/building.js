// import * as THREE from "https://unpkg.com/three@0.121.1/build/three.module.js";
// import { PositionalAudioHelper } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/helpers/PositionalAudioHelper.js";
// import * as THREE from "../../../node_modules/three/build/three.module.js";
"use strict";

var THREE = require("three");
import { PositionalAudioHelper } from "three/examples/jsm/helpers/PositionalAudioHelper.js";
import { camera } from "../World.js";

let floors = [];
let floor, floor1;
let audio, audio1;

function createFloor() {
  let clock = new THREE.Clock();
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("public/images/textures/3GWCDMA.png");
  const texture1 = textureLoader.load("public/images/textures/Mpp4800.png");

  const floorGeometry = new THREE.PlaneGeometry(100, 1000);
  const floorMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    map: texture,
  });

  const floorMaterial1 = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    map: texture1,
  });

  floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = Math.PI * -0.5;
  floor.position.set(-50, -150, -200);
  floor.receiveShadow = true;

  floor1 = new THREE.Mesh(floorGeometry, floorMaterial1);
  floor1.rotation.set(Math.PI * -0.5, 0, 0);
  floor1.position.set(100, -100, -600);

  floors.push(floor, floor1);

  //audio attachment

  const audioLoader = new THREE.AudioLoader();

  const listener = new THREE.AudioListener();
  camera.add(listener);

  audioLoader.load("public/sounds/st_1.mp3", function (buffer) {
    for (let i = 0; i < 1; i++) {
      audio = new THREE.PositionalAudio(listener);
      audio.setBuffer(buffer);
      audio.setDistanceModel("exponential");
      audio.setRefDistance(2000);
      audio.setDirectionalCone(90, 270, 0);

      audio.play();

      const helper = new PositionalAudioHelper(audio, 20);
      audio.add(helper);

      floor.add(audio);
    }
  });

  const audioLoader1 = new THREE.AudioLoader();

  audioLoader1.load("public/sounds/st_2.wav", function (buffer) {
    for (let i = 0; i < 1; i++) {
      audio1 = new THREE.PositionalAudio(listener);
      audio1.setBuffer(buffer);
      audio1.setDistanceModel("exponential");
      audio1.setRefDistance(3000);
      audio1.setDirectionalCone(90, 270, 0);

      audio1.play();

      const helper1 = new PositionalAudioHelper(audio1, 20);
      audio1.add(helper1);

      floor1.add(audio1);
    }
  });

  floors.tick = () => {
    var delta = clock.getDelta();
    var elapsedTime = clock.getElapsedTime();

    for (let floor of floors) {
      var speed = 0.3;
      floor.position.z += Math.sin(elapsedTime) * 2;
      // if (audio) {
      //   floor.children[0].rotation.y += Math.sin(Math.PI / 4) * speed;

      //   if (
      //     floor.children[0].rotation.y >= Math.PI / 4 &&
      //     floor.children[0].rotation.y <= 0
      //   ) {
      //     speed *= -1;
      //   }
      // }
    }
  };
  return floors;
}

export { createFloor };
