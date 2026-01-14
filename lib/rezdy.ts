/**
 * PARR v1 Rezdy Booking Helpers
 * Handles redirect logic for Shuttle vs SUV deployments
 */

export const BOOKING_URLS = {
  SHUTTLE: "https://partyatredrocks.rezdy.com/calendarWidget/shuttle",
  SUV: "https://partyatredrocks.rezdy.com/calendarWidget/private-suv",
};

export function getBookingUrl(type: 'shuttle' | 'suv') {
  return type === 'shuttle' ? BOOKING_URLS.SHUTTLE : BOOKING_URLS.SUV;
}
