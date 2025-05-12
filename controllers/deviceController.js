import { toggleDevice, getStatusByDeviceId } from "../services/tuyaService.js";
import AppError from "../utils/appError.js";

export async function toggle(req, res, next) {
    try {
        const { deviceId } = req.params;
        const { status } = req.body;
        if (!deviceId)
            throw new AppError("Device ID is required and must be of type String.", 400);
        if (typeof status !== 'boolean')
            throw new AppError("Status must be boolean", 400);
        const result = await toggleDevice(deviceId, status);
        res.json({ message: "Toggled", result });
    } catch (err) {
        next(err);
    }
}

export async function getStatus(req, res, next) {
    try {
        const { deviceId } = req.params;
        const status = await getStatusByDeviceId(deviceId);
        res.json({ status });
    } catch (err) {
        next(err);
    }
}
