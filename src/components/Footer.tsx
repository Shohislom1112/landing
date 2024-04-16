import React from "react";
import "@/components/footer.scss";
import { ball, ins, logo, logo12, telegram, twit, yout } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="div">
      <div className="container">
      <div className="divs">
        <div className="div1">
          <Image src={logo12} alt="asas" className="img" />
          <p className="pp">Copyright © 2020 Nexcent ltd. <br />
All rights reserved</p>
          <div className="img">
          <Image src={ins} alt="asas" className="imag" />
          <Image src={ball} alt="asas" className="imag" />
          <Image src={twit} alt="asas" className="imag" />
          <Image src={yout} alt="asas" className="imag" />
          </div>
        </div>
        <div className="div2">
          <div className="div1">
            <p className="p1">Company</p>
            <p className="p2">Abouy Us</p>
            <p className="p2">Blog</p>
            <p className="p2">Contact Us</p>
            <p className="p2">Pricing</p>
            <p className="p2">Testimonials</p>
          </div>
          <div className="div1">
            <p className="p1">Support</p>
            <p className="p2">Help Center</p>
            <p className="p2">Terms of service</p>
            <p className="p2">Legal</p>
            <p className="p2">Privacy policy</p>
            <p className="p2">Status</p>
          </div>
          <div className="div_2">
            <p className="ppp">Stay up to date</p>
            <div className="input">
              <input type="email" className="search" placeholder="Your email address" />
              <Image src={telegram} alt="22" className="tel" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
