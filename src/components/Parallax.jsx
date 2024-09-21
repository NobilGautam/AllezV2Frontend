import React, { Component } from "react";
import { motion } from "framer-motion";
import { wrap } from "@motionone/utils";
import mobile from '../assets/allez assets/mobile.png';
import appStore from '../assets/allez assets/apple-store-white.png'
import playStore from '../assets/allez assets/google-store-white.png'

class ParallaxText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseX: 0,
      directionFactor: 1,
      currentVelocity: props.baseVelocity, // Start with base velocity
    };
    this.animationFrameId = null;
    this.scrollVelocity = 0;
    this.scrollTimeout = null;
  }

  componentDidMount() {
    this.startAnimation();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener("scroll", this.handleScroll);
    clearTimeout(this.scrollTimeout); // Clear the timeout on unmount
  }

  handleScroll = () => {
    // Calculate the scroll velocity
    this.scrollVelocity = window.scrollY;

    // Clear the timeout to reset the velocity
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);

    // Increase velocity while scrolling
    this.setState({ currentVelocity: this.props.baseVelocity + Math.abs(this.scrollVelocity) / 100 });

    // Set a timeout to reset velocity after scrolling stops
    this.scrollTimeout = setTimeout(() => {
      this.setState({ currentVelocity: this.props.baseVelocity });
    }, 300); // Adjust the delay as needed
  };

  startAnimation() {
    const updatePosition = () => {
      const { currentVelocity } = this.state;

      // Use the current velocity to adjust the movement
      const moveBy = this.state.directionFactor * currentVelocity * (1 / 60); // Simulate delta time

      // Ensure direction factor is set based on scroll velocity
      if (this.scrollVelocity < 0) {
        this.setState({ directionFactor: -1 });
      } else if (this.scrollVelocity > 0) {
        this.setState({ directionFactor: 1 });
      }

      this.setState((prevState) => ({
        baseX: prevState.baseX + moveBy,
      }));

      this.animationFrameId = requestAnimationFrame(updatePosition);
    };

    this.animationFrameId = requestAnimationFrame(updatePosition);
  }

  render() {
    const x = `${wrap(-20, -45, this.state.baseX)}%`;

    return (
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex text-6xl font-semibold uppercase"
          style={{ transform: `translateX(${x})` }}
        >
          <span className="mr-8 font-bebas text-white">{this.props.children}</span>
          <span className="mr-8 font-bebas text-white">{this.props.children}</span>
          <span className="mr-8 font-bebas text-white">{this.props.children}</span>
          <span className="mr-8 font-bebas text-white">{this.props.children}</span>
          <span className="mr-8 font-bebas text-white">{this.props.children}</span>
          <span className="mr-8 font-bebas text-white">{this.props.children}</span>
          <span className="mr-8 font-bebas text-white">{this.props.children}</span>
          <span className="mr-8 font-bebas text-white">{this.props.children}</span>
          
        </motion.div>
      </div>
    );
  }
}

export default class Parallax extends Component {
  render() {
    return (
      <section className="relative py-20 mt-[30px] mb-[150px] bg-[#1c1b1f]">
        <ParallaxText baseVelocity={-3}>Access Your Training.</ParallaxText>
        <ParallaxText baseVelocity={3}>Whenever You Want.</ParallaxText>
        <p className=" font-montserrat text-gray-300 text-left w-[50%] ml-[35%]">Your Training Journey, Always with You. Access our entire library of badminton, cricket, football, and more programs directly on your mobile device. Download the app, unlock your personalized training plan, and get ready to dominate from anywhere!</p>
        <img src={appStore} alt="" className="w-[200px] ml-[35%] mt-4 hover:cursor-pointer hover:scale-105 duration-200 hover:bg-[#222222] hover:bg-opacity-45 rounded-lg"/>
        <img src={playStore} alt="" className="w-[200px] ml-[35%] mt-4 hover:cursor-pointer hover:scale-105 duration-200 hover:bg-[#222222] hover:bg-opacity-45 rounded-lg"/>
        <img src={mobile} alt="" className=" absolute top-[-3rem] left-[5%]"/>
      </section>
    );
  }
}
