import React from "react";
import Carousel from "../Carousel/Carousel";
import "./first.css";
import savings from '../../assets/savings.svg';
import { Img } from '../../common';

export const First = () => {
    return (
      <div>
        {/* <object  type="image/svg+xml" data={personal_finance}>svg-animation</object> */}
        <Img src={savings} className="svg-imagee"/>

        <div className="front-page-box">
        <h1 className="heading"> Start Savings </h1>
        <p> If your parents had any financial acumen, they’ve probably told you from a young age to start saving, and they were right (about that)! </p>
        <p>If you start saving ₹500 per month from the age of 15, on a savings account that gives you
           3% per year of interest, by the time you’re 20 you’ll have almost ₹33K,
           and while that doesn’t seem like a lot, remember it only took ₹500 per month.</p>
        <p>If you save ₹1000 per month instead, you’ll have over ₹66K after those 5 years, and almost ₹132K after 5 more.</p>
        <h1 className="heading">It's Calmer</h1>
        <p>In short, so that you can have some money for more expensive items or an emergency!</p>
        <p>If you want to buy a bike or a car, or even a decent laptop, it’s hard to do it (if you don’t want to take out a loan) if you have no money saved.</p>
        <p>It also provides you with freedom, often overlooked. Freedom of choice. Freedom of saying “no”, and freedom of saying “yes”, instead of being forced to.</p>
        <p></p>
        </div>
            < Carousel/>
            <div className="front-page-box">
            <h1 className="heading"> It's Easy </h1>
            <p> It shouldn’t be hard to save. You don’t even really need a savings account if that’s something that makes you uncomfortable (you won’t make any interest over time, though)!</p>
            <p>You can simply have a separate bank account (even in the same bank), as long as you’re not paying unnecessary fees, so you can have your “main” account be basically your remaining budget; your “available” money.</p>
            <p>So please start saving, it's good for you! </p>
          <div className="spacing"></div>
            </div>
      </div>
    );
  };