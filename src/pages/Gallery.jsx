import React from "react";
import { Button } from "flowbite-react"
import * as Images from "../assets/images/index"

export default function Gallery() {
  const initialVisibleImages = 9
  const [visibleImages, setVisibleImages] =
    React.useState(initialVisibleImages)
  const [isSpinning, setIsSpinning] = React.useState(false)

  const loadMoreImages = () => {
    setIsSpinning(true)
    setTimeout(() => {
      setVisibleImages((prevVisibleImages) => prevVisibleImages + 9)
      setIsSpinning(false)
    }, 1000)
  };

  const images = [
    Images.pic1,
    Images.pic2,
    Images.pic3,
    Images.pic4,
    Images.pic5,
    Images.pic6,
    Images.pic7,
    Images.pic8,
    Images.pic9,
    Images.pic10,
    Images.pic11,
    Images.pic12,
    Images.pic13,
    Images.pic14,
    Images.pic15,
    Images.pic16,
    Images.pic17,
    Images.pic18,
    Images.pic19,
    Images.pic20,
    Images.pic21,
    Images.pic22,
    Images.pic23,
    Images.pic24,
    Images.pic25,
    Images.pic26,
    Images.pic27
  ]

  return (
    <div className="gallery-container mx-auto mb-20 pb-12 mobile:w-screen">
      <div className="gallery-header-container text-center">
        <h1 className="pb-10 pt-4 font-semibold text-4xl">Gallery</h1>
      </div>

      <div className="collection-container mx-auto grid desktop:grid-cols-2 mobile:grid-cols-1 gap-4">
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
