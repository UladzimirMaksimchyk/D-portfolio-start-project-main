import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>

            <BurgerButton>
                <span> </span>
            </BurgerButton>

            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            {/* <Mask>
                <span>{item}</span>
              </Mask>
              <Mask>
                <span>{item}</span>
              </Mask> */}

                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledMobileMenu>
    );
};




const StyledMobileMenu = styled.nav`
ul{
display: flex;
gap: 30px;
justify-content: center;
}

@media ${theme.media.tablet}{
  display: none;
}

`
const BurgerButton = styled.button`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;




`


const Link = styled.a`
font-family: Poppins,sans-serif;
font-size: 20px;
font-weight: 600;
text-align: center;
color:#ff00f7;
`


const ListItem = styled.li`
  &:hover{
  transform: scale(1.2);
}
`


