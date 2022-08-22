import styled from "styled-components";

export const ContainerTech = styled.div`
display: grid;
grid-template-columns: 1.4fr 0.4fr 0.2fr;
margin-bottom: 2vh;
background-color: var(--grey-3);
border-radius: var(--border-radius);
padding: 2vh 2vh 2vh 2vh;
align-items: center;
width: 90%;
@media (min-width:425px){
width: 95%;
}
@media (min-width:768px){
width: 90%;
}
`
export const TechName = styled.span`
font-family: var(--font);
font-size: var(--headline-bold);
color: var(--grey-0);
`
export const TechStatus = styled.span`
font-family: var(--font);
font-size: var(--headline);
color: var(--grey-2);
margin-right: 2vh;
`
export const IconDel = styled.img`
height: 2.2vh;
`