import React, { useEffect, useState } from "react";

const banners = [
  "https://wordpressunnis.s3.ap-southeast-1.amazonaws.com/images/feed/thumbnail/6879cc67d6e5f0f261659b3f.png",
  "https://wordpressunnis.s3.ap-southeast-1.amazonaws.com/images/banner/66f6799fd6e5f0cb707718bf.jpg",
  "https://wordpressunnis.s3.ap-southeast-1.amazonaws.com/images/feed/thumbnail/6879caedd6e5f0f261659b3d.png",
];

export default function HeroBannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-40 rounded overflow-hidden  bg-gray-100">
      {banners.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`banner-${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay teks (opsional) */}
      <div className="absolute top-0 left-0 p-4 text-white">
        <h3 className="font-semibold text-lg">Hi, Unnie 👋</h3>
      </div>
    </div>
  );
}
