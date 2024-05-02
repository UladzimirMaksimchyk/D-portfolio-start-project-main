import styled from "styled-components";
import { theme } from "../styles/Theme";


export const SectionTitle = styled.h2`
text-align: center;
font-family: Poppins, sans-serif;
font-size: 32px;
font-weight: 600;
line-height: 48px;
margin-bottom: 90px;

position: relative;

&::before{
    content: "";
    display: inline-block;
    width: 155px;
    height: 3px;
    background-color: #ff00f7;
    
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);

}
`

export {}