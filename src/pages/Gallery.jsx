import React from "react";
import { Button } from "flowbite-react";

export default function Gallery() {
  const initialVisibleImages = 9;
  const [visibleImages, setVisibleImages] =
    React.useState(initialVisibleImages);
  const [isSpinning, setIsSpinning] = React.useState(false);

  const loadMoreImages = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setVisibleImages((prevVisibleImages) => prevVisibleImages + 9);
      setIsSpinning(false);
    }, 1000);
  };

  const images = [
    "./src/assets/images/pic-1.jpg",
    "./src/assets/images/pic-2.jpg",
    "./src/assets/images/pic-3.jpg",
    "./src/assets/images/pic-4.jpg",
    "./src/assets/images/pic-5.jpg",
    "./src/assets/images/pic-13.jpg",
    "./src/assets/images/pic-7.jpg",
    "./src/assets/images/pic-8.jpg",
    "./src/assets/images/pic-9.jpg",
    "./src/assets/images/pic-10.jpg",
    "./src/assets/images/pic-11.jpg",
    "./src/assets/images/pic-12.jpg",
    "./src/assets/images/pic-14.jpg",
    "./src/assets/images/pic-15.jpg",
    "./src/assets/images/pic-16.jpg",
    "./src/assets/images/pic-17.jpg",
    "./src/assets/images/pic-18.jpg",
    "./src/assets/images/pic-19.jpg",
    "./src/assets/images/pic-20.jpg",
    "./src/assets/images/pic-21.jpg",
    "./src/assets/images/pic-22.jpg",
    "./src/assets/images/pic-23.jpg",
    "./src/assets/images/pic-24.jpg",
    "./src/assets/images/pic-25.jpg",
    "./src/assets/images/pic-26.jpg",
    "./src/assets/images/pic-27.jpg",
  ];

  return (
    <div className="gallery-container mx-auto">
      <div className="gallery-header-container text-center">
        <h1 className="pb-10 pt-4 font-semibold text-4xl">Gallery</h1>
      </div>

      <div className="collection-container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(0, visibleImages).map((image, index) => (
          <div key={index}>
            <img
              className="gallery-image h-auto max-w-full rounded-lg"
              src={image}
              alt="gallery-image"
            />
          </div>
        ))}
        {visibleImages < images.length && (
          <div className="load-more-container pb-5">
            <Button
              color="dark"
              className={` text-sm ${isSpinning ? "animate-spin" : ""}`}
              onClick={loadMoreImages}
            >
              {" "}
              {isSpinning ? "+" : "Load more..."}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
