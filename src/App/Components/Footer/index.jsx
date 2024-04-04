import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto py-8">
        <section className="flex flex-col items-center text-white text-lg">
          <Link to="/" className="flex items-center">
            TRVL
            <i className="fab fa-typo3 ml-2" />
          </Link>
          <div className="mt-8">
            <p className="text-center">
              Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className="text-center">You can unsubscribe at any time.</p>
            <div className="flex justify-center mt-4">
              <form className="flex">
                <input
                  className="px-4 py-2 rounded-l border border-white focus:outline-none"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
                <Button buttonStyle="btn--outline">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
        <div className="container mx-auto mt-8">
          <div className="flex flex-wrap justify-center">
            <div className="w-full max-w-xs mx-4 my-4 sm:w-1/2 md:w-1/4">
              <h2 className="text-white">About Us</h2>
              <Link to="/sign-up" className="text-white">
                How it works
              </Link>
              <Link to="/" className="text-white">
                Testimonials
              </Link>
              <Link to="/" className="text-white">
                Careers
              </Link>
              <Link to="/" className="text-white">
                Investors
              </Link>
              <Link to="/" className="text-white">
                Terms of Service
              </Link>
            </div>
            <div className="w-full max-w-xs mx-4 my-4 sm:w-1/2 md:w-1/4">
              <h2 className="text-white">Contact Us</h2>
              <Link to="/" className="text-white">
                Contact
              </Link>
              <Link to="/" className="text-white">
                Support
              </Link>
              <Link to="/" className="text-white">
                Destinations
              </Link>
              <Link to="/" className="text-white">
                Sponsorships
              </Link>
            </div>
            <div className="w-full max-w-xs mx-4 my-4 sm:w-1/2 md:w-1/4">
              <h2 className="text-white">Videos</h2>
              <Link to="/" className="text-white">
                Submit Video
              </Link>
              <Link to="/" className="text-white">
                Ambassadors
              </Link>
              <Link to="/" className="text-white">
                Agency
              </Link>
              <Link to="/" className="text-white">
                Influencer
              </Link>
            </div>
            <div className="w-full max-w-xs mx-4 my-4 sm:w-1/2 md:w-1/4">
              <h2 className="text-white">Social Media</h2>
              <Link to="/" className="text-white">
                Instagram
              </Link>
              <Link to="/" className="text-white">
                Facebook
              </Link>
              <Link to="/" className="text-white">
                Youtube
              </Link>
              <Link to="/" className="text-white">
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <section className="container mx-auto mt-8">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <Link to="/" className="text-white flex items-center">
                TRVL
                <i className="fab fa-typo3 ml-2" />
              </Link>
            </div>
            <small className="text-white">TRVL © 2020</small>
            <div className="flex">
              <Link
                className="text-white text-2xl mx-2"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="text-white text-2xl mx-2"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="text-white text-2xl mx-2"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="text-white text-2xl mx-2"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
