import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>

            <BurgerButton>
                <span> </span>
            </BurgerButton>
<MobileMenuPopup>
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

</MobileMenuPopup>
        </StyledMobileMenu>
    );
};




const StyledMobileMenu = styled.nav`
/* ul{
display: flex;
gap: 30px;
justify-content: center;
} */

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


span {
    display: block;
    width: 36px;
    height: 2px;
    color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;


&::before{
    content: "";
    display: block;
    width: 36px;
    height: 2px;
    color: ${theme.colors.font};
    position: absolute;
    transform: translateY(-10px);
}

&::after{
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    color: ${theme.colors.font};
    position: absolute;
    transform: translateY(10px);

}

}

`

const MobileMenuPopup = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 99999;
    background-color: ${theme.colors.primaryBg};

    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
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


