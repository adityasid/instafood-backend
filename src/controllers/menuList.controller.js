import { asyncHandler } from "../utils/asyncHandler.js";
import { getMenuListUrl } from "../utils/url.js";
import apiResponse from "../utils/apiResponse.js";

const menuList = asyncHandler(async (req, res) => {
  const { lat, lng, restaurantId } = req.query;
  const menuUrl = getMenuListUrl(lat, lng, restaurantId);

  await apiResponse(menuUrl, res);
});

export { menuList };
