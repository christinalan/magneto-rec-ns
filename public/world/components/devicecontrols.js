// import { DeviceOrientationControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/DeviceOrientationControls.js";
"use strict";

var THREE = require("three");
import { DeviceOrientationControls } from "three/examples/js/controls/DeviceOrientationControls";

function createDeviceControls(camera) {
  const deviceControls = new DeviceOrientationControls(camera);

  deviceControls.tick = () => {
    deviceControls.update();
    console.log("device Controls enabled");
  };

  return deviceControls;
}

export { createDeviceControls };
