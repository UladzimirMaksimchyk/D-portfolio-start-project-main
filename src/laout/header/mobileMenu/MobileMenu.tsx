import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    const{menuIsOpen,setmenuIsOpen} = useState(false)
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen}>
                <span> </span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen}>
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
display: none;


@media ${theme.media.tablet}{
  display: block;
}

`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;


span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
    background-color: rgba(255, 255, 255, 0);

    `}



&::before{
    content: "";
    display: block;
    width: 36px;
    height: 3px;
    background-color: ${theme.colors.font};
    position: absolute;
    transform: translateY(-10px);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: rotate(-45deg) translateY(0);
    `}

}

&::after{
    content: "";
    display: block;
    width: 24px;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    transform: translateY(10px);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: rotate(45deg) translateY(0);
    width: 36px;

    `}


}

}

`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 99999;
    background-color: ${theme.colors.primaryBg};
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}


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


