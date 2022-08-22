import styled from "styled-components";

export const MainLogin = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--grey-3);
height: 100vh;
width: 100%;
`

export const MainRegister = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--grey-3);
height: 100vh;
width: 100%;
`

export const MainDashboard = styled.main`
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--grey-3);
min-height: 100vh;
padding: 0 5vh 5vh 5vh;
@media (min-width:425px){padding: 1vh 6vh 0 6vh;}
@media (min-width:700px){padding: 2vh 15vh 0 15vh;}
`