import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"



const Footer = styled.footer`
position: relative;
background-color: ${theme.colors.primaryBg};
`

const Name = styled.span`
/* ${font({ family: "Poppins, sans-serif", weight: 500, Fmax: 22, Fmin: 16 })} */
 font-family: Poppins;
font-size: 22px;
font-weight: 500;
line-height: 90px;


&:hover{
    text-shadow: 15px 15px 5px #ff00f7;
}

`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
        
`
const Copyright = styled.small`
font-family: Poppins;
font-size: 12px;
font-weight: 500;
line-height: 27px;

        
`
export const S = {
Footer,
Name,
SocialList,
SocialItem,
SocialLink,
Copyright,
}