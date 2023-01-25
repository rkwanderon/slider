import React, { useRef, useState } from "react";
import { slides } from "../imageData";
import {
  Box,
  Container,
  Dot,
  Img,
  MainContainer,
  Pagination,
  SlideContainer,
} from "./slider.style";
slides;
const Slider = () => {
  const [active, setActive] = useState(1);
  const increment = () => {
    if (active == slides.length - 1) {
      setActive((prev) => (prev = 0));
    } else {
      setActive((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (active == 0) {
      setActive((prev) => (prev = slides.length - 1));
    } else {
      setActive((prev) => prev - 1);
    }
  };

  return (
    <div>
      <MainContainer>
        <h3>{active}</h3>
        <SlideContainer>
          {slides &&
            slides.reverse().map((e, i) => {
              return (
                <Box
                  key={e.id}
                  prev={
                    active == i - 1
                      ? true
                      : active == slides.length
                      ? true
                      : false
                  }
                  next={active == i + 1 ? true : false}
                  front={active == i ? true : false}
                >
                  <Img src={e.image} alt="image" />
                </Box>
              );
            })}
        </SlideContainer>
        <Pagination>
          <button onClick={decrement}> &#8592;</button>
          {new Array(slides.length).fill(0).map((e, i) => {
            return <Dot onClick={()=>setActive(i)} key={i} current={i == active ? true : false} />;
          })}
          <button onClick={increment}> &#8594;</button>
        </Pagination>
      </MainContainer>
    </div>
  );
};

export default Slider;
