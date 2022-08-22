import styled from "styled-components";

export const HeaderDashboard = styled.div`
display: grid;
grid-template-columns: 1.8fr 0.2fr;
width: 100%;
align-items: center;
padding: 2vh 3vh 2vh 3vh;
box-shadow: 2px 15px 36px -13px rgba(0,0,0,0.61);
@media (min-width:425px){}
@media (min-width:768px){}
`
export const Infos = styled.div`
margin: 3vh 0 3vh 0;
display: flex;
flex-direction: column;
width: 100%;
@media (min-width: 768px) {margin:5vh 0 4.5vh 0;}
`

export const InfoName = styled.span`
font-family: var(--font);
font-size: var(--title);
color: var(--grey-0);
`
export const InfoCourseModule = styled.span`
font-family: var(--font);
font-size: var(--headline);
color: var(--grey-1);
padding-top: 2vh;
`
export const ContainerTechList = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 3vh;
background-color: var(--grey-2);
border-radius: var(--border-radius);
padding: 3.5vh 2vh 3vh 2vh;
width: 100%;
`
export const InfoList = styled.span`
font-family: var(--font);
font-size: var(--title);
color: var(--grey-0);
`
export const ImgList = styled.img`
margin-top: 10vh;
height: 20vh;
margin-bottom: 5vh;
@media (min-width:425px){height: 30vh;}
@media (min-width:726px){height: 35vh;}
`