import styled from "styled-components";

export const Buttons = styled.div`
margin-top: 2vh;
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
`
export const ContainerFormOff = styled.div`
margin-top: 2vh;
display: grid;
grid-template-columns: 1.8fr 0.2fr;
width: 100%;
height: 2vh;
align-items: center;
margin-bottom: 3vh;
`
export const FormOffTitle = styled.span`
font-family: var(--font);
font-size: 24px;
color: var(--grey-0);
`
export const BlurScreen = styled.div`
@media (min-width:768px) {
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  top: 0;
  left: 0;
  position: absolute;
  background-color:rgba(0, 0, 0, 0.35);
  color: rgba(0, 0, 0, 0.35);
  z-index: 2;
}
`
export const ContainerForm = styled.div`
background-color: var(--grey-2);
border-radius: var(--border-radius);
padding: 3.5vh 3.5vh 3vh 3.5vh;
@media (min-width: 768px){
  margin: 15% 40%;
  position: absolute;
  z-index: 9999;
}
`
export const FormTitle = styled.span`
font-family: var(--font);
margin-bottom: 2vh;
font-size: var(--title);
color: var(--grey-0)
`
