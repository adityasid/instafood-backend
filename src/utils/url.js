import { baseUrl } from "./constants.js";

export const defaultHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
};

export const getRestaurantListUrl = (lat, lng) => {
  return `${baseUrl}/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
};

export const getMenuListUrl = (lat, lng, restaurantId) => {
  return `${baseUrl}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}&submitAction=ENTER`;
};
