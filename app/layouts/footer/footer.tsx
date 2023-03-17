"use client";
import React, { useEffect, useRef } from "react";

import "./footer.css";

function Footer() {
  const wrapper = useRef<HTMLDivElement>(null);

  const animateBubble = (x: number) => {
    const bubble = document.createElement("div");

    bubble.className = "bubble";
    bubble.style.left = `${x}px`;

    wrapper.current?.appendChild(bubble);

    setTimeout(() => wrapper.current?.removeChild(bubble), 2000);
  };

  useEffect(() => {
    window.onmousemove = (e) => animateBubble(e.clientX);
  }, []);

  return (
    <>
      <footer id="footer">
        <div id="bubble-wrapper" ref={wrapper}></div>
        <div id="footer-content">
          <div className="footer-section">
            <h3 className="footer-section-title">General</h3>
            <div className="footer-section-links">
              <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                Directory
              </a>
              <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                About
              </a>
              <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                Contact Us
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-section-title">Social</h3>
            <div className="footer-section-links">
              <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                Twitter
              </a>
              <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                CodePen
              </a>
              <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                YouTube
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-section-title">Legal</h3>
            <div className="footer-section-links">
              <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                Privacy
              </a>
              <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                Terms
              </a>
              <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
