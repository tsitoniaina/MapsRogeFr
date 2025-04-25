export function getLocation(
    onSuccess: (position: GeolocationPosition) => void,
    onError: (error: GeolocationPositionError) => void
  ) {
    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 0,
    };
  
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }
  