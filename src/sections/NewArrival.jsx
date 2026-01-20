import styled from "styled-components";
import { assets } from "../assets/Assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Section = styled.section`
  min-height: 100dvh;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1120px) {
    margin-top: 1rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30dvw;
  height: 90dvh;
  z-index: 11;
  box-shadow: 0 0 0 4dvw ${(props) => props.theme.text};
  // border: 3px solid black;
  background: url(${assets.bgFrame}) no-repeat center center/cover;

  @media (max-width: 1120px) {
    width: 40dvw;
    height: 80dvh;
  }

  @media (max-width: 1024px) {
    width: 50dvw;
    box-shadow: 0 0 0 60dvw ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 60dvw;
  }

  @media (max-width: 480px) {
    width: 80dvw;
    height: 60dvh;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 1024px) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25dvw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1120px) {
    width: 30dvw;
    padding-top: 5rem;
  }

  @media (max-width: 1024px) {
    width: 30dvw;
  }

  @media (max-width: 768px) {
    width: 40dvw;
  }

  @media (max-width: 480px) {
    width: 60dvw;
    padding-top: 4rem;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      style={{borderRadius: "20px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.9)"}}
    >
      <img 
        style={{borderRadius: "20px"}}
        src={img} alt={title} 
      />
      {/* <h2>{title}</h2> */}
    </Item>
  );
};

function NewArrival() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const scrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = scrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      // Calculate the exact distance the content needs to move up
      // Content Height - Viewport Height
      let scrollDistance = scrollingElement.offsetHeight - element.offsetHeight;

      t1.fromTo(
        scrollingElement,
        {
          y: 0,
        },
        {
          y: -scrollDistance, // Move up by exactly the excess height
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: "bottom+=100% top-=100%", // Adjust this to make the scroll faster/slower
            scroller: ".app",
            scrub: true,
            pin: true,
            // Recalculate values if window is resized
            invalidateOnRefresh: true, 
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill(); // Fixed typo here (was t1.kil)
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="new-arrival">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </Title>

      <Container ref={scrollingRef}>
        <Product img={assets.mat_1} />
        <Product img={assets.mat_2} />
        <Product img={assets.mat_3} />
        <Product img={assets.mat_4} />
        <Product img={assets.mat_5} />
        <Product img={assets.mat_6} />
        <Product img={assets.mat_7} />
        <Product img={assets.mat_8} />
        <Product img={assets.mat_9} />
        <Product img={assets.mat_10} />
        <Product img={assets.mat_11} />
        <Product img={assets.mat_12} />
        <Product img={assets.mat_13} />
        <Product img={assets.mat_14} />
        <Product img={assets.mat_15} />
        
      </Container>
      <Text data-scroll data-scroll-speed="-4">
        Embrace authentic tradition with our new batik collection, available for all family members. We offer curated clothing crafted with exceptional artistry, bringing timeless elegance to your wardrobe. 
        <br />
        <br />
        Whether seeking <b>tailor-made designs</b> or a variety of styles, you will find a look to fit your taste.
        <br />
        <br />
        Wear your cultural heritage with pride.
        
      </Text>
    </Section>
  );
}

export default NewArrival;
