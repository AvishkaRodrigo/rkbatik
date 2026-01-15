import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { assets } from "../assets/Assets";
import { Grid } from "@mui/material";

const Section = styled.section`
  position: relative;
  min-height: 100dvh;
  width: 80dvw;
  display: flex;

  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90dvw;
  }

  @media (max-width: 480px) {
    width: 100dvw;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 1024px) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 1024px) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }

  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100dvh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }

    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;

function About() {
  return (
    <>
      <Section id="fixed-target" className="about">
        <Title
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          About Us
        </Title>
        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          Embrace the perfect balance of tradition, elegance, and craftsmanship at Rk Real Batik. We are a family-run brand based in Adelaide, dedicated to bringing the beauty of South Asian and Sri Lankan heritage to your doorstep through refined batik clothing. Each piece is thoughtfully crafted to celebrate authentic artistry, cultural pride, and timeless design with effortless sophistication.
          <br />
          <br />
          Follow us on social media:
          <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={12} sm={6}>
              <a href="https://www.facebook.com/profile.php?id=61586077802773" target="_blank" rel="noopener noreferrer">
                <img 
                  src={assets.facebookIcon} 
                  alt="Facebook Logo" 
                  style={{ width: '50px', height: 'auto' }}
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a href="https://www.instagram.com/rkrealbatik/" target="_blank" rel="noopener noreferrer">
                <img 
                  src={assets.instagramIcon} 
                  alt="Instagram Logo" 
                  style={{ width: '50px', height: 'auto' }}
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a href="https://www.instagram.com/rkrealbatik?igsh=MXFvc3ZkcXdjMGpzeg==" target="_blank" rel="noopener noreferrer">
                <img 
                  src={assets.tiktokIcon} 
                  alt="TikTok Logo" 
                  style={{ width: '50px', height: 'auto' }}
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={6} data-tilt data-tilt-glare data-tilt-max-glare="0.3" data-tilt-scale="1.1">
              <a href="https://api.whatsapp.com/send?phone=%2B61416503255" target="_blank" rel="noopener noreferrer">
                <img 
                  src={assets.whatsappIcon} 
                  alt="Whatsapp Logo" 
                  style={{ width: '50px', height: 'auto' }}
                />
              </a>
            </Grid>
          </Grid>
        </Left>
        <Right>
          <img src={assets.img_1} alt="About Us" />
          <img
            data-scroll
            data-scroll-speed="5"
            src={assets.img_2}
            className="small-img-1"
            alt="About Us"
          />
          <img
            data-scroll
            data-scroll-speed="-2"
            src={assets.img_11}
            className="small-img-2"
            alt="About Us"
          />
        </Right>
      
      </Section>
      <div style={{width: "100%", paddingTop: "20px", paddingBottom: "20px"}}>
        <Marquee pauseOnHover gradient>
          <span style={{ marginRight: "100px" }}>Follow us on social media</span>
          <span style={{ marginRight: "100px" }}>Follow us on social media</span>
          <span style={{ marginRight: "100px" }}>Follow us on social media</span>
          <span style={{ marginRight: "100px" }}>Follow us on social media</span>
          <span style={{ marginRight: "100px" }}>Follow us on social media</span>
          <span style={{ marginRight: "100px" }}>Follow us on social media</span>
          <span style={{ marginRight: "100px" }}>Follow us on social media</span>
          <span style={{ marginRight: "100px" }}>Follow us on social media</span>
        </Marquee>
      </div>
    </>
  );
}

export default About;
