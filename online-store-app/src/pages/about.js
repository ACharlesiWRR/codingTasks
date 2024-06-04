import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'; 
import NavigationBar from '../components/nav';
import { useLocation } from "react-router-dom";
import TotalPrice from '../components/totalPrice';

// on About component use https://react-bootstrap.github.io/docs/components/figures/
// to display 1/ store logo img
// 2. a short description of store
// 3. two fictional images of store
// 4. how to contact us 
// app style using custom CSS and possibily other React libraries

export default function AboutUs() {
    const totalPrice = parseFloat(localStorage.getItem("totalPrice")) || 0;
    const isPurchased = totalPrice > 0;

    // I couldn't get useLocation to work
    // const location = useLocation();
    // console.log(location.state); 
    // const cartTotal = location.state?.cartTotal || 0;

  return (
    <div>
      <TotalPrice cartTotal={totalPrice} isPurchased={isPurchased} />
      <NavigationBar cartTotal={totalPrice} />
      <h1>About us</h1>
      <div className="store-image">
        <img src="/images/store-logo.png" alt="Our Logo"></img>
      </div>
      <section className="about-p-copy">
        <p>
          We are an independent trainer store in London, England. We stock
          shoes! There's something for everyone.
        </p>
        <p>
          We have the latest kicks, some retro throwbacks and everything in
          between.
        </p>
        <p>
          Our friendly staff are here to help you find your perfect new
          trainers.
        </p>
        <p>Visit us today, open 8am to 8pm 7-days a week!</p>
      </section>
      <div className="store-image" alt="The inside of our store">
        <img src="/images/trainer-store-inside.jpg"></img>
      </div>
      <section className="contact-us">
        <h2>Contact us</h2>
        <p>Telephone: +44 555 555 555</p>
        <a a href="mailto:shoestore@shoestore.com">
          Email our friendly in-store team
        </a>
      </section>
      <div className="store-image" alt="Our storefront">
        <img src="/images/trainer-store-front.jpg"></img>
      </div>
    </div>
  );
};
