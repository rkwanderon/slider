import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const SlideContainer = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  width: 21vw;
  position: relative;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
  border-radius: 15px;
`;
export const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  ${(props) =>
    props.front &&
    css`
      z-index: 10;
      opacity: 1;
    `}
  ${(props) =>
    props.prev &&
    css`
      transform: scale(0.8);
      z-index: 2;
      opacity: 0.3;
      height: 80%;
      transform: translateX(-30%);
    `}
    ${(props) =>
    props.next &&
    css`
      transform: scale(0.8);
      z-index: 2;
      height: 80%;
      opacity: 0.3;
      transform: translateX(30%);
      
    `}
`;
export const Pagination = styled.div`
padding: 1% 0;
width: 3%;
display: flex;
justify-content: center;
gap: 50%;
align-items: center;
button{
  padding: 12%;
  border-radius: 50%;
  border:1px solid;
  background: transparent;
  font-size: large;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: #000;
  }
}

`;
export const Dot = styled.div`
/* border: 1px solid; */
cursor: pointer;
border-radius: 50%;
padding: 8% 10%;
height: 9px;
width: 9px;
background-color: rgba(0,0,0,0.4);
${props=>props.current && css`
background-color: rgba(0,0,0,0.8);
outline: 1px solid red;
`}
`;
