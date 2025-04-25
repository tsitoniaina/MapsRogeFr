const BASE_URL = 'https://back.s-o-p.org/api/v1';

export const verifyTrackingRequest = async (trackingId: string) => {
  const response = await fetch(`${BASE_URL}/locations/${trackingId}`);
  return response;
};

export const updateTrackingStatus = async (trackingId: string, status: 'SUCCESS' | 'REFUSED', coordinates?: any) => {
  const response = await fetch(`${BASE_URL}/locations/${trackingId}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status, coordinates }),
  });
  return response;
};
