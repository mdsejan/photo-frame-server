import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { FrameGalleryRoutes } from "../modules/FrameGallery/FrameGallery.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/framegallery",
    route: FrameGalleryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
