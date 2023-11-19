import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Marquee, { Motion } from "react-marquee-slider";
import times from "lodash.times";

export default function Layout() {
  const messages = [
    "20% off of all services from Nov 22 to Dec 22, 2023",
    "Free one drink with service!",
    "10% off of all services with a Google review :)",
  ]

  const [currentMessageIndex, setCurrentMessageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    },10000); 
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="site-wrapper">
      <div style={{ height: "1.5em" }} className="sticky top-0">
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
                <p style={{ margin: 0, color: "#333" }}>
                  {messages[currentMessageIndex]}
                </p>
              </div>
            </Motion>
          ))}
        </Marquee>
      </div>
      <Header />
      <main className="mx-auto pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
