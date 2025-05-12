
import express from "express";
import * as device from "./controllers/deviceController.js";

const router = express.Router();

const GET_STATUS_DEVICE="/device/status/:deviceId";
const TOGGLE_DEVICE = "/device/toggle/:deviceId";

router.route(GET_STATUS_DEVICE).get(device.getStatus);

router.route(TOGGLE_DEVICE).put(device.toggle);

export default router;
