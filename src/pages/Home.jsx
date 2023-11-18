import React from "react";
import nailCta from "../assets/images/nail-cta-bg.jpg";
import quotationIcon from "../assets/images/quotation-icon.png";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <>
      <div className="home-container h-screen">
        <div className="cta-image-container relative items-around">
          <img src={nailCta} alt="nail-cta-image" />
        </div>
        <div className="overlay-container absolute flex flex-col gap-16 font-bold p-5 justify-center items-center ">
          <div className="w-full cta-header-container pb-24 flex justify-start pl-0 text-3xl">
            <h2>Let's get glam!</h2>
          </div>
          <div className="message-container flex flex-col gap-8 items-start">
            <div className="flex gap-3">
              <img className="w-8 h-8" src={quotationIcon} alt="quoation-icon" />
              <p className="w-3/5 tracking-wider text-lg">
                Great nail's don't happen by chance, they shappen by appoitment.
              </p>
            </div>
            <Button color="dark" className="uppercase">
              Book appoitment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
