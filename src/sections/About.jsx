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

// UPDATED TITLE COMPONENT
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.gold};
  z-index: 5;

  /* Desktop: Position relative to the Left Text container */
  position: absolute;
  top: -8rem; /* Moves title up above the paragraph text */
  left: 0;

  /* Mobile/Tablet: Drop into the flow inside the glass box */
  @media (max-width: 1024px) {
    position: static; /* Removes absolute positioning */
    display: block;
    text-align: center;
    margin-bottom: 1rem;
    font-size: ${(props) => `calc(${props.theme.fontBig} - 2vw)`};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontxxl};
    margin-bottom: 0.5rem;
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  p {
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    
    /* This background now protects the Title too */
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
    border-radius: 20px;
    
    /* Ensure flex column so Title sits on top */
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontsm};
    width: 85%; /* Slightly wider on mobile for better fit */
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
      left: 5%;
      bottom: 10%;
    }

    .small-img-2 {
      width: 30%;
      left: 60%;
      bottom: 20%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100dvh;
      object-fit: cover;
    }

    .small-img-1,
    .small-img-2 {
      display: none;
    }
  }
`;

function About() {
  return (
    <>
      <title>
        About RK Real Batik | Sri Lankan Batik in Adelaide, Australia
      </title>
      <meta
        name="description"
        content="RK Real Batik is a family-run batik clothing brand in Adelaide offering authentic Sri Lankan batik dresses for men, women, families, and Sri Lankan New Year celebrations across Australia."
      />

      <Section id="fixed-target" className="about">
        
        {/* Title removed from here and moved inside Left below */}

        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          
          {/* TITLE MOVED HERE */}
          <Title>
            About RK Real Batik
          </Title>

          <p>
            RK Real Batik is a family-run batik clothing brand based in Adelaide,
            proudly bringing authentic Sri Lankan batik to customers across
            Australia. Our collections reflect a deep appreciation for
            craftsmanship, tradition, and refined design.
          </p>

          <p>
            We offer thoughtfully designed batik dresses for men, women, and
            families, blending cultural heritage with modern elegance. Each
            piece is handcrafted using time-honoured techniques and premium
            fabrics to ensure comfort, quality, and timeless appeal.
          </p>

          <p>
            RK Real Batik also specialises in batik dresses for Sri Lankan New
            Year, cultural celebrations, and family occasions, helping you
            celebrate meaningful moments with style and authenticity.
          </p>

          <p><strong>Follow us on social media:</strong></p>

          <Grid container spacing={2} justifyContent="center">
            {/* Social Media Icons (Unchanged) */}
            <Grid item xs={6} sm={3}>
              <a href="https://www.facebook.com/profile.php?id=61586077802773" target="_blank" rel="noopener noreferrer">
                <img src={assets.facebookIcon} alt="RK Real Batik Facebook page" style={{ width: "50px" }} />
              </a>
            </Grid>

            <Grid item xs={6} sm={3}>
              <a href="https://www.instagram.com/rkrealbatik/" target="_blank" rel="noopener noreferrer">
                <img src={assets.instagramIcon} alt="RK Real Batik Instagram profile" style={{ width: "50px" }} />
              </a>
            </Grid>

            <Grid item xs={6} sm={3}>
              <a href="https://www.tiktok.com/@rk.real.bathik" target="_blank" rel="noopener noreferrer">
                <img src={assets.tiktokIcon} alt="RK Real Batik TikTok account" style={{ width: "50px" }} />
              </a>
            </Grid>

            <Grid item xs={6} sm={3}>
              <a href="https://api.whatsapp.com/send?phone=%2B61416503255" target="_blank" rel="noopener noreferrer">
                <img src={assets.whatsappIcon} alt="Contact RK Real Batik on WhatsApp" style={{ width: "50px" }} />
              </a>
            </Grid>
          </Grid>
        </Left>

        <Right>
          <img src={assets.img_1} alt="Sri Lankan batik clothing brand in Adelaide" />
          <img
            data-scroll
            data-scroll-speed="5"
            src={assets.img_2}
            className="small-img-1"
            alt="Handcrafted batik dresses for men and women"
          />
          <img
            data-scroll
            data-scroll-speed="-2"
            src={assets.img_11}
            className="small-img-2"
            alt="Family batik dresses for cultural celebrations"
          />
        </Right>
      </Section>

      <div style={{ width: "100%", padding: "20px 0" }}>
        <Marquee pauseOnHover gradient>
          <span style={{ marginRight: "100px" }}>Celebrate Sri Lankan New Year in Style</span>
          <span style={{ marginRight: "100px" }}>Authentic Sri Lankan Batik in Adelaide</span>
          <span style={{ marginRight: "100px" }}>Batik Dresses for all Family Members</span>
          <span style={{ marginRight: "100px" }}>Handcrafted Batik Clothing</span>
          <span style={{ marginRight: "100px" }}>Follow RK Real Batik on social media</span>
        </Marquee>
      </div>
    </>
  );
}

export default About;