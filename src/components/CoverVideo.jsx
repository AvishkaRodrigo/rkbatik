import styled from "styled-components";
import HeroVideo from "../assets/video2.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100dvh;
  position: relative;

  video {
    width: 100%;
    height: 100dvh;
    object-fit: cover;

    @media (max-width: 768px) {
      object-position: center 10%;
    }
  }
  
  @media (max-width: 480px) {
    object-position: center 50%;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
  }

  h1 {
    font-family:  "Zalando Sans SemiExpanded", sans-serif;
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 480px) {
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
  }
  h3 {
    font-family: "Story Script", sans-serif;
    font-size: ${(props) => props.theme.fontxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 200;

    @media (max-width: 480px) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 1,
      staggerChildren: 0.3,
    },
  },
};

const subItem = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 2,
      staggerChildren: 2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

function CoverVideo() {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <div style={{display: 'flex'}}>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
            >
              R
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.09"
              data-scroll-speed="4"
            >
              K
            </motion.h1>
          </div>
          <div style={{display: "flex", justifyContent:'end'}}>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.09"
              data-scroll-speed="4"
            >
              Art Meets Style
            </motion.h2>
          </div>
        </div>
        <motion.h3
          variants={subItem}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: "10vh" }}
        >
          <p>
            Elevate your wardrobe with designs that blend tradition and modern style.
            <br/>
            Discover our handpicked batik collection in Adelaide 
          </p>
        </motion.h3>
      </Title>
      <video src={HeroVideo} type="video/mp4" autoPlay muted loop></video>
    </VideoContainer>
  );
}

export default CoverVideo;
