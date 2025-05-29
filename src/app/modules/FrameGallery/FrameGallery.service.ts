import cloudinary from "../../config/cloudinary";

// ===> Get All Category From Database <===
const getAllFrameGalleryFromDB = async (
  page = 1,
  limit = 20,
  next_cursor: string | null = null
) => {
  try {
    const searchResult = await cloudinary.search
      .expression("folder:reunion2025/dghs-gallery")
      .sort_by("public_id", "desc")
      .max_results(limit)
      .next_cursor(next_cursor || undefined)
      .execute();

    const images = searchResult.resources.map((img: any) =>
      cloudinary.url(img.public_id, {
        width: 400,
        quality: "auto",
        fetch_format: "auto",
        crop: "scale",
      })
    );

    return {
      images,
      nextCursor: searchResult.next_cursor || null,
    };
  } catch (error) {
    throw new Error("Failed to fetch images from Cloudinary.");
  }
};

export const FrameGalleryServices = {
  getAllFrameGalleryFromDB,
};
