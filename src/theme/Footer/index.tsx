import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={clsx("footer", styles.footer)}>
      <div className="container">
        <div className={styles.footerColumns}>
          <div className={styles.footerCol}>
            <a
              href="/"
              style={{ display: "flex", alignItems: "center", gap: "8px",textDecoration: "none" }}
            >
              <img
                src="/img/learnhub.png"
                alt="LearnHub Logo"
                style={{ height: "30px" }}
              />
              <span style={{ fontWeight: 700, fontSize: "18px",color: "#22c55e" }}>
                LearnHub
              </span>
            </a>
            <p style={{ marginTop: "8px", fontSize: "14px", opacity: 0.8 }}>
              Upskill with future-ready tech courses designed for your career
              growth.
            </p>
          </div>

          <div className={styles.footerCol}>
            <h4>Docs</h4>
            <ul>
              <li>
                <a href="/docs/intro">
                Tutorial<span className="footerLink "><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><path fill="#ffffff" d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z"/></svg></span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Community</h4>
            <ul>
              <li>
                <a href="https://discord.gg/YmSKSDfH">
                  Discord<span className="footerLink "><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><path fill="#ffffff" d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z"/></svg></span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>More</h4>
            <ul>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="https://github.com/souvikpramanikgit/LearnHub">
                  GitHub<span className={styles.footerLink}><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><path fill="#ffffff" d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z"/></svg></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          Copyright © {new Date().getFullYear()} LearnHub. Built with
          Docusaurus.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
