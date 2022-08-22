import styled from "styled-components";

export const HeaderLogin = styled.div`
display: flex;
flex-direction: row;
width: 30vh;
justify-content: center;
align-items: center;
margin-bottom: 2vh;
`

export const ContainerLogin = styled.div`
background-color: var(--grey-2);
padding: 4vh;
border-radius: var(--border-radius);
width: 30vh;
min-height: 70%;
`

export const LoginTitle = styled.div`
font-family: var(--font);
font-size: var(--title);
color: var(--grey-0);
margin-bottom: 2.5vh;
display: flex;
align-items: center;
justify-content: center;
`

export const Question = styled.span`
display: flex;
justify-content: center;
margin-top: 1vh;
margin-bottom: 3vh;
color: var(--grey-1);
font-family: var(--font);
font-size: var(--headline);
`

export const LoginArt = styled.img`
margin-top: 2vh;
width: 100%;
`
