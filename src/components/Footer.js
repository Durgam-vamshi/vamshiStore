import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to embrace the future of technology?</h3>
              <h3>Let’s get started today!</h3>
            </div>
            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>

        <footer>
          <div className="container grid grid-four-column">
            {/* About Section */}
            <div className="footer-about">
              <h3>Vamshi Durgam</h3>
              <p>
                Vamshi Durgam is your trusted destination for the latest in electronic gadgets. We strive to bring you cutting-edge technology that enhances your lifestyle and keeps you ahead in the digital age.
              </p>
            </div>
            {/* Subscribe Section */}
            <div className="footer-subscribe">
              <h3>Stay Connected</h3>
              <p>Subscribe to our newsletter for the latest tech updates, offers, and tips.</p>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                <input type="submit" value="Subscribe" placeholder = "subscribe" />
              </form>
            </div>
            {/* Social Media Section */}
            <div className="footer-social">
              <h3>Connect With Us</h3>
              <p>Follow us on our social media channels for exciting updates and exclusive deals.</p>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    rel="noreferrer"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Section */}
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>Have questions? We’re here to help! Reach out to us at:</p>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
              <p>
                © {new Date().getFullYear()} Vamshi Store. All Rights Reserved. Empowering tech, empowering you.
              </p>
              <div>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 80vw;
    margin: auto;
    padding: 4rem 8rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    letter-spacing: 1.2px;

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 10rem 0 6rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 1.6rem;
      letter-spacing: 1.5px;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      line-height: 1.8;
      letter-spacing: 1.2px;
    }

    .footer-social--icons {
      display: flex;
      gap: 1.5rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    form input[type="email"] {
      width: 70%;
      padding: 0.8rem;
      margin-bottom: 1rem;
      border: none;
      border-radius: 0.4rem;
    }

    form input[type="submit"] {
      padding: 0.8rem 2rem;
      border: none;
      background-color: ${({ theme }) => theme.colors.hr};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 0.4rem;
      cursor: pointer;
      letter-spacing: 1.2px;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.hr};
      }
    }
  }

  .footer-bottom--section {
    padding-top: 4rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }

    p {
      text-align: center;
    }

    .grid div:last-child {
      text-align: right;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      p {
        text-align: center;
      }
      .grid div:last-child {
        text-align: center;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 90vw;
      padding: 3rem;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 8rem 0 6rem 0;

      .footer-social--icons {
        justify-content: center;
      }
    }
  }
`;

export default Footer;
