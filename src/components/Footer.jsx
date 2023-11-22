import React from "react";

export default function Footer() {
  return (
    <footer
      id="booking"
      className="footer-wrapper flex-col w-screen pt-10 px-10 items-center mobile:h-auto"
    >
      <div className="footer-container h-full w-full desktop:flex mobile:flex-col desktop:justify-between">
        <div className="map-container desktop:w-1/3 desktop:h-3/4 mobile:h-2/4 mobile:pb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.4110717606964!2d-79.87857672297052!3d43.53547236003584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6fd88d6f9b51%3A0xf6dbfe7e6a2ba291!2sPT%20nails%20and%20bar!5e0!3m2!1sen!2sca!4v1700342979956!5m2!1sen!2sca"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-us-container flex flex-col gap-10">
          <h3 className="text-2xl">Contact us</h3>
          <div className="address-container flex flex-col gap-4">
            <h4 className="text-lg font-bold uppercase">Address</h4>
            <h5>PT Nails and Bar Milton</h5>
            <p className="w-2/3">
              address: {""}
              <a
                href="https://www.google.com/maps/place/PT+nails+and+bar/@43.5354724,-79.8785767,17z/data=!3m1!4b1!4m6!3m5!1s0x882b6fd88d6f9b51:0xf6dbfe7e6a2ba291!8m2!3d43.5354685!4d-79.8760018!16s%2Fg%2F11vkdzqs1w?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                1003 Maple Ave, Milton, ON L9T 0A5, Unit B006
              </a>
            </p>
          </div>
          <div className="contact-container flex flex-col gap-4 pb-10">
            <h4 className="text-lg font-bold uppercase">Contact</h4>
            <p className="w-2/3">
              phone: <a href="tel:+16479270500">+1 905 864 9495</a>
            </p>
            <p className="w-auto">
              email:
              <a href="mailto:ptnailsandbar2023@gmail.com">
                {" "}
                ptnailsandbar2023@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="business-hour-container flex flex-col gap-10">
          <h3 className="text-2xl">Business hours</h3>
          <ul className="flex flex-col gap-4">
            <li>Mon-Sat: 10am - 8pm</li>
            <li>Sat: 10am - 4pm</li>
            <li>Sun: 10am-4pm</li>
            <li className="font-bold italic">*Holiday hours may change</li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-20 opacity-40 text-sm">
        {" "}
        <p>
          &copy; 2023 PT Nails Bar Milton. All rights reserved. | Made with ❤️{" "}
        </p>
      </div>
    </footer>
  );
}
