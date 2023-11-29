import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Marquee, { Motion } from "react-marquee-slider";
import times from "lodash.times";
import * as Images from "../assets/images/index";
import { Link } from "react-scroll";

export default function Layout() {
  const backToTop = document.querySelector(".back-to-top");
  const [isBackToTop, setIsBackToTop] = React.useState(false);

  // Conditionally render the button
  function renderToTopButton(isBackToTop) {
    if (backToTop) {
      backToTop.style.visibility = isBackToTop ? "visible" : "hidden";
      backToTop.style.opacity = isBackToTop ? "0.2" : "0";
      backToTop.style.transform = isBackToTop ? "scale(1)" : "scale(0)";
    }
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      setIsBackToTop(true);
      renderToTopButton(isBackToTop);
    } else {
      setIsBackToTop(false);
      renderToTopButton(isBackToTop);
    }
  });

  const [currentMessageIndex, setCurrentMessageIndex] = React.useState(0);

  const messages = [
    "30% off all services Nov 22 - Dec 9, 2023, and 15% off until Dec 22, 2023.",
    "Free drink with services!",
    "Get 10% off all services with a Google review :)",
  ];
  

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="site-wrapper">
      <div style={{ height: "1.5em" }} className="fix top-0">
        <Marquee velocity={100} minScale={0.7} scatterRandomly={false}>
          {times(5, Number).map((id) => (
            <Motion
              key={`child-${id}`}
              initDeg={0}
              direction={"clockwise"}
              velocity={10}
              radius={0}
            >
              <div
                style={{
                  width: "100vw",
                  borderRadius: "50%",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0, color: "#333", width: "100%" }}>
                  {messages[currentMessageIndex]}
                </p>
              </div>
            </Motion>
          ))}
        </Marquee>
      </div>
      <Header />
      <main className="mx-auto w-screen">
        <Outlet />
      </main>
      <Footer />
      <Link
        to="top"
        smooth={true}
        duration={500}
        className={`back-to-top ${isBackToTop ? "visible" : ""}`}
        offset={-70}
        title="Back-to-Top"
      >
        <img
          src={Images.arrowUp}
          alt="Back-to-Top"
          className="back-to-top__image"
        />
      </Link>
    </div>
  );
}
