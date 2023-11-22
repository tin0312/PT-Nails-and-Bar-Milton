import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { scroller } from "react-scroll";
import { Carousel, Button } from "flowbite-react";
import * as Images from "../assets/images/index";
import nailCta from "../assets/images/nail-cta-bg.avif";
import quotationIcon from "../assets/images/quotation-icon.png";
import storyImage from "../assets/images/story-image.webp";

export default function Home() {
  const productImages = [
    Images.productOne,
    Images.productTwo,
    Images.productThree,
    Images.productFour,
    Images.productFive,
    Images.productSix,
    Images.productSeven,
    Images.productEight,
    Images.productNine,
    Images.productTen,
    Images.productEleven,
    Images.productTwelve,
  ];

  const scrollToBooking = () => {
    scroller.scrollTo("booking", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToTopOnClick = () => {
    scroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="home-container w-screen mb-20">
        <div className="cta-image-container relative">
          <img src={nailCta} alt="nail-cta-image" />
        </div>
        <div className="overlay-container desktop:w-1/3 mobile:w-5/6 mobile:h-3/6 absolute mobile:mx-auto flex flex-col desktop:gap-10 font-bold p-5 justify-center items-center ">
          <div className="w-full cta-header-container desktop:pb-20 mobile:pb-2 flex justify-start pl-0 text-3xl">
            <h2>Time for a glam-up!</h2>
          </div>

          <div className="message-container flex-col gap-10 desktop:items-start mobile:items-start">
            <div className="desktop:flex mobile:flex-col icon-container">
              <div className="mobile:w-full flex justify-center pb-10">
                <img
                  className="h-8 w-8 desktop:pr-2"
                  src={quotationIcon}
                  alt="quotation-icon"
                />
              </div>
              <p className="desktop:w-4/5 tracking-wider text-lg">
                Fabulous nails aren't a stroke of luck; they're perfected
                through appointments
              </p>
            </div>

            <div className="w-full flex justify-start desktop:pt-12 mobile:pt-4 ">
              <Button
                as={Link}
                to="/#booking"
                color="dark"
                className="uppercase"
                onClick={scrollToBooking}
              >
                Book appointment
              </Button>
            </div>
          </div>
        </div>
        <div className="story-container w-3/4 mx-auto py-20 desktop:flex mobile:flex-col">
          <div className="story-message-container desktop:w-3/5 mobile:w-full flex flex-col gap-10">
            <p className="number-mark w-12 font-bold pb-10">/01</p>
            <div className="story-title-container pt-4">
              <h3 className="section-title text-4xl">We love doing nails</h3>
              <h4 className="text-5xl">Our story</h4>
            </div>
            <p className="mobile:full desktop:w-2/3 mobile:pb-10">
              PT Nails and Bar is dedicated to ensuring a delightful experience
              for every customer who visits our shop. Our warm and inviting
              salon creates a comforting and relaxing atmosphere. With our
              expert nail technicians, we stand as your premier destination for
              top-notch nail care!
            </p>
          </div>
          <div className="story-image-container desktop:w-2/5 mobile:h-2/3 mobile:w-full">
            <img className="w-full h-full" src={storyImage} alt="story-image" />
          </div>
        </div>
        <div className="service-introduction-container desktop:flex mobile:flex-col w-3/4 mx-auto py-20">
          <div className="service-header-container desktop:w-3/5 mobile:w-full flex flex-col gap-10">
            <p className="number-mark w-12 font-bold pb-10">/02</p>
            <div className="story-title-container pt-4 mobile:pb-10">
              <h3 className="section-title text-4xl pb-3">We are proud of</h3>
              <h4 className="text-5xl">Quality Equipment</h4>
            </div>
          </div>
          <div className="service-message-container desktop:w-2/5 mobile:full flex flex-col justify-around mobile:gap-4">
            <p className="w-full p-0 tracking-wider">
              We take pride in delivering superb nail care to our customers,
              upholding the utmost standards of cleanliness and sterilization.
              Our equipment and tools undergo UV sterilization, and we employ
              disposable spa liners, files, and buffers for your safety and
              satisfaction.{" "}
            </p>
            <div className="flex w-3/4">
              <Link to="/services/manicure">
                <Button
                  className="service-btn uppercase"
                  color="white"
                  onClick={scrollToTopOnClick}
                >
                  View our services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="product-container desktop:flex mobile:flex-col w-3/4 mx-auto py-20">
          <div className="product-header-container desktop:w-3/5 mobile:w-full flex flex-col gap-10">
            <p className="number-mark w-12 font-bold pb-10">/03</p>
            <div className="product-title-container pt-4 mobile:pb-10">
              <h3 className="section-title text-4xl pb-3">We use</h3>
              <h4 className="text-5xl">Quality Products</h4>
            </div>
          </div>
          <div className="product-slide-container desktop:w-2/5 mobile:w-full">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
              <Carousel slideInterval={3000}>
                {productImages.map((image, index) => (
                  <img key={index} src={image} alt={`product-slide-${index}`} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
