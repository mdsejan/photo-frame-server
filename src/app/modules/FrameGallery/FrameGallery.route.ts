import express from "express";
import { FrameGalleryControllers } from "./FrameGallery.controller";

const router = express.Router();

router.get("/images", FrameGalleryControllers.getFrameGallery);

export const FrameGalleryRoutes = router;
