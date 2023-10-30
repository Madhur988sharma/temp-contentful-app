import React from "react";
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby hexagon jawn stumptown small batch pop-up sartorial viral
            taiyaki succulents fashion axe salvia echo park letterpress meh.
            Wayfarers cold-pressed franzen af tbh. Small batch 8-bit gatekeep
            copper mug kickstarter. 3 wolf moon post-ironic pug fashion axe,
            thundercats knausgaard YOLO.
          </p>
        </div>
        <div className="img-container">
        <img src={heroImg} alt="woman and the browser" className="img"/>   
        </div>
      </div>
    </section>
  );
};

export default Hero;
