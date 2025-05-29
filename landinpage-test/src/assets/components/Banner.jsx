export function Banner() {
  return (
    <div className="banner">
      <iframe
        className="video-youtube"
        src="https://www.youtube.com/embed/CqjNPstONdg?autoplay=1&mute=1&loop=1&playlist=CqjNPstONdg"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
      <div className="banner-overlay">
        <h1 className="banner-titulo">FIRST TO ELEVEN</h1>
      </div>
    </div>
  );
}
