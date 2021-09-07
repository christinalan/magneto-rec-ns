import * as THREE from "../../js/build/three.module.js";
import { PositionalAudioHelper } from "../../js/examples/jsm/helpers/PositionalAudioHelper.js";
import { createCamera } from "./camera.js";

let analyser, audio, audioData;
let audios = [];
let posaudios = [];

function setData() {
  console.log("audio passed through");
  const listener = new THREE.AudioListener();
  const camera = createCamera();

  camera.add(listener);

  // audio = new THREE.PositionalAudio(listener);
  // audio.setMediaElementSource(sig);
  // audio.setDistanceModel("exponential");
  // audio.setRefDistance(200);
  // audio.setDirectionalCone(45, 180, 0);
  // audio.hasPlaybackControl = true;
  // audio.autoplay = true;

  // sig.play();

  // analyser = new THREE.AudioAnalyser(posaudio1, 256);
  // audioData = analyser.getFrequencyData();

  posaudios.tick = () => {};

  return posaudios;
}

export { setData, posaudios };
