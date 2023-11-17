import React from "react";

export default function Footer() {
  return (
    <footer className="footer-wrapper flex relative bottom-0 w-screen h-1/5 mt-20">
      <div className="w-3/4 mx-auto flex items-center justify-between">
        <div className="logo-container">
          {/* <img
            className="w-2/12 rounded-full"
            src="./src/assets/images/lightBgLogo.jpg"
            alt="logo-image"
          /> */}
        </div>
        {/* <div className="social-icon-container flex gap-10">
          <a href="https://www.facebook.com/profile.php?id=61553458505834&mibextid=LQQJ4d">
            <img
              src="./src/assets/images/icon-facebook.svg"
              alt="facebook-icon"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61553458505834&mibextid=LQQJ4d">
            <img
              src="./src/assets/images/icon-instagram.svg"
              alt="instagram-icon"
            />
          </a>
        </div> */}
      </div>
    </footer>
  );
}
