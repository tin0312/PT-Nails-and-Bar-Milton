import React from "react";
import { NavLink, Link } from "react-router-dom";
import nailCta from "../assets/images/nail-cta-bg.avif";
import quotationIcon from "../assets/images/quotation-icon.png";
import storyImage from "../assets/images/story-image.webp";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import * as Images from "../assets/images/index"

const productImages = [Images.productOne, Images.productTwo, Images.productThree, Images.productFour, Images.productFive];
export default function Home() {

  const scrollToBooking = () => {
    scroller.scrollTo('booking', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <>
      <div className="home-container w-screen mb-20">
        <div className="cta-image-container relative">
          <img src={nailCta} alt="nail-cta-image" />
        </div>
        <div className="overlay-container desktop:w-1/3 mobile:w-5/6 mobile:h-3/6 absolute mobile:mx-auto flex flex-col desktop:gap-10 font-bold p-5 justify-center items-center ">
          <div className="w-full cta-header-container pb-24 flex justify-start pl-0 text-3xl">
            <h2>Let's get glam!</h2>
          </div>

          <div className="message-container flex-col gap-10 desktop:items-start mobile:items-start">
            <div className="desktop:flex mobile:flex-col icon-container">
              <div className="mobile:w-full flex justify-center pb-10">
                <img
                  className="h-8 w-8 desktop:pr-2"
                  src={quotationIcon}
                  alt="quoation-icon"
                />
              </div>
              <p className="desktop:w-4/5 tracking-wider text-lg">
                Great nails don't happen by chance, they are sharpened by
                appointments.
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
              PT Nails and Bar aims to provide a satisfying experience for
              everyone customer that comes to our shop. Our inviting, cozy salon
              allows a comforting and relaxing environment. With our skilled
              nail technicians, we are your number one destination for your nail
              care!
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
              <h3 className="section-title text-4xl pb-3">We are pround of</h3>
              <h4 className="text-5xl">Quality Equipment</h4>
            </div>
          </div>
          <div className="service-message-container desktop:w-2/5 mobile:full flex flex-col justify-around mobile:gap-4">
            <p className="w-full p-0 tracking-wider">
              We pride ourselves on providing our customers with fabulous nail
              care while maintaining the highest level of cleanliness and
              sterilization. All of our equipment and tools are UV sterilized.
              We also use disposable spa liners, files and buffers.{" "}
            </p>
            <div className="flex w-3/4">
              <NavLink to="/services/manicure">
                <Button className="service-btn uppercase" color="white">
                  View our services
                </Button>
              </NavLink>
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
