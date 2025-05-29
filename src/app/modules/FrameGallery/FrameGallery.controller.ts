import { StatusCodes } from "http-status-codes";
import noDataFound from "../../error/noDataFound";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { FrameGalleryServices } from "./FrameGallery.service";

// ===> Get All FrameGallery <===
const getFrameGallery = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 20;
  const nextCursor = req.query.next_cursor as string | null;

  const result = await FrameGalleryServices.getAllFrameGalleryFromDB(
    page,
    limit,
    nextCursor
  );

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Gallery images fetched successfully from Cloudinary",
    data: result.images,
    meta: {
      nextCursor: result.nextCursor,
    },
  });
});

export const FrameGalleryControllers = {
  getFrameGallery,
};
