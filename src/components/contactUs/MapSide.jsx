import React from 'react'

const MapSide = () => {
  return (
    <div className="w-full h-[260px] md:h-[350px] rounded-xl overflow-hidden">
      <iframe
        title="map"
        loading="lazy"
        allowFullScreen
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24153.29273623539!2d-73.993!3d40.750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ1JzAwLjAiTiA3M8KwNTknMzcuMCJX!5e0!3m2!1sen!2sus!4v000000000"
      ></iframe>
    </div>
  );
}

export default MapSide
