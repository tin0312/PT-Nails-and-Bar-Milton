import React from "react";
import { PopupWidget } from "react-calendly";

export default function Booking() {
  return (
    <div className="h-screen pt-20">
      <div className="booking-container text-center">
        <h1 className="text-3xl font-bold">Booking</h1>
        <div>
          <script
            id="setmore_script"
            type="text/javascript"
            src="https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js"
          ></script>
          <a
            style="float:none; "
            id="Setmore_button_iframe"
            href="https://booking.setmore.com/scheduleappointment/7a753a67-866a-4a50-a2ab-b5e3557c1bc3"
          >
            <img
              border="none"
              src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.svg"
              alt="Book an appointment with Nhat Truong Hoang using Setmore"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
