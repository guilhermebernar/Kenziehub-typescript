import styled from "styled-components";

export const ButtonPink = styled.button`
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--color-primary);
border-color: var(--color-primary);
border: 1px;
border-radius: var(--border-radius);
padding: 1vh 0 1vh 0;
color: var(--grey-0);
font-family: var(--font);
font-size: var(--headline);
width: 100%;
transition: 0.3s;
&:hover{
  background-color: var(--color-primary-negative)
}
`
export const ButtonLightGray= styled.div`
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--grey-3);
border-color: var(--grey-3);
border: 1px;
border-radius: var(--border-radius);
padding: 1.2vh 0 1.2vh 0;
color: var(--grey-0);
font-family: var(--font);
font-size: var(--headline);
width: 100%;
transition: 0.3s;
&:hover{
  background-color: var(--grey-2)
}
`
export const ButtonDarkGray= styled.div`
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--grey-2);
border-color: var(--grey-2);
border: 1px;
border-radius: var(--border-radius);
padding: 1vh;
color: var(--grey-0);
font-family: var(--font);
font-size: var(--headline);
width: 100%;
transition: 0.3s;
&:hover{
  background-color: var(--grey-1);
  }
`
export const Icon = styled.img`
display: flex;
align-items: center;
justify-content: center;
height: 3vh;
`