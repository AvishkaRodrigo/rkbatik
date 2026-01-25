import styled from "styled-components";
import { assets } from "../assets/Assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

const Section = styled.section`
  min-height: 100dvh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  /* Mobile: Stack items vertically */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center; /* Center content vertically */
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  
  /* Desktop: Keep absolute */
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 1024px) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  /* --- MOBILE FIXES --- */
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxl};
    
    position: relative; 
    top: unset;
    left: unset;
    
    text-align: center;
    width: 100%;
    margin-top: 2rem;
    
    transform: none !important; 
  }
`;

const Left = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  z-index: 10;

  /* Desktop Default: Fixed sidebar */
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: 35%;
    min-height: 100dvh;
  }

  @media (max-width: 1024px) {
    width: 35%;
    min-height: 100dvh;
  }

  /* --- MOBILE CHANGES START --- */
  @media (max-width: 768px) {
    position: absolute; /* Stick to top of the pinned section */
    top: 0;
    left: 0;
    width: 100%;
    height: 25vh; /* 30% of screen height */
    min-height: unset; /* Override desktop min-height */
    
    /* Center text in the top 30% */
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 0 auto; /* Remove the large top margin from desktop */
      padding-top: 2rem; /* Make space for Title */
      font-size: ${(props) => props.theme.fontmd};
      width: 90%;
      text-align: center;
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100dvh;
  background-color: ${(props) => props.theme.grey};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    left: 0;
    top: 25vh;
    height: 75vh;
    min-height: unset;
    
    width: max-content; 
    padding-left: 5%; 
    padding-right: 5%;
    
    align-items: center;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    border-radius: 10px;
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 15rem;
    margin-right: 3rem;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      style={{ borderRadius: "20px", boxShadow: "5px 5px 15px rgba(0, 0, 0,0.9)" }}
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      {/* <h1>{title}</h1> */}
    </Item>
  );
};

function Shop() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let scrollWidth = scrollingElement.scrollWidth;
    let viewportWidth = window.innerWidth;

    let scrollDistance = 0;

    if (window.innerWidth <= 768) {
      scrollDistance = scrollWidth - viewportWidth;
      
    } else {
      scrollDistance = scrollWidth - viewportWidth / 2;
    }

    let t1 = gsap.timeline();

    const timeoutId = setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `+=${scrollDistance}`, 
          scroller: ".app",
          scrub: 1, // Increased scrub slightly for smoother mobile feel
          pin: true,
        },
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `+=${scrollDistance}`,
          scroller: ".app",
          scrub: 1,
        },
        x: -scrollDistance, 
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 500); // Increased timeout slightly to ensure DOM is fully rendered

    return () => {
      clearTimeout(timeoutId);
      t1.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="designs">
      <Title data-scroll data-scroll-speed="-1">
        Wear the Art
      </Title>
      <Left>
        <p style={{ textAlign: "left", flexDirection: "column" }}>
          A refined selection of handcrafted batik designs, created for modern
          wardrobes. Clean lines, rich textures, and timeless patterns come
          together in pieces that feel effortless yet distinctive.
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>
            Designed to be worn, noticed, and remembered.
          </span>
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={assets.img_1} title="Sweatshirts" />
        <Product img={assets.img_2} title="Sweatshirts" />
        <Product img={assets.img_3} title="Sweatshirts" />
        <Product img={assets.img_4} title="Shirts" />
        <Product img={assets.img_5} title="Blazers" />
        <Product img={assets.img_6} title="Suits" />
        <Product img={assets.img_7} title="Antiques" />
        <Product img={assets.img_8} title="Jewelry" />
        <Product img={assets.img_9} title="Watches" />
        <Product img={assets.img_10} title="Special Edition" />
      </Right>
    </Section>
  );
}

export default Shop;