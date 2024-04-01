import { asyncHandler } from "../utils/asyncHandler.js";
import { getRestaurantListUrl } from "../utils/url.js";
import apiResponse from "../utils/apiResponse.js";

const restaurantList = asyncHandler(async (req, res) => {
  const { lat, lng } = req.query;
  const restaurantsUrl = getRestaurantListUrl(lat, lng);

  await apiResponse(restaurantsUrl, res);
});

export { restaurantList };
