import styled from "styled-components";
import { assets } from "../assets/Assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

const Section = styled.section`
  min-height: 100dvh;
  height: auto;
  /* width: 100dvw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 1024px) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100dvh;
  z-index: 10;

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

  @media (max-width: 1024px) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 768px) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100dvh;
  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */

  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
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
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      style={{borderRadius: "20px", boxShadow: "5px 5px 15px rgba(0, 0, 0,0.9)"}}
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
    
    // 1. Calculate the total width of the scrollable content
    let scrollWidth = scrollingElement.scrollWidth;
    let viewportWidth = window.innerWidth;

    // 2. Adjust distance: Stop when the last item is in the middle
    // We subtract half the viewport width so it doesn't scroll "all the way" to the edge
    let scrollDistance = scrollWidth - (viewportWidth / 2);

    let t1 = gsap.timeline();

    const timeoutId = setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `+=${scrollDistance}`, // End based on calculated distance
          scroller: ".app",
          scrub: true,
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
          scrub: true,
        },
        x: -scrollDistance, // Move only until the last item reaches center
        ease: "none",
      });
      
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      t1.kill(); // Fixed typo: was .kil()
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="designs">
      <Title data-scroll data-scroll-speed="-1">
        Wear the Art
      </Title>
      <Left>
        <p style={{textAlign: 'justify', flexDirection: 'column'}} >          
          A refined selection of handcrafted batik designs, created for modern wardrobes. Clean lines, rich textures, and timeless patterns come together in pieces that feel effortless yet distinctive. 
          <br/>
          <br/>
          <span style={{fontWeight: '600'}}>
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
