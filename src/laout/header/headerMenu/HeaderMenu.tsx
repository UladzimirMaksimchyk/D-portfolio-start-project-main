import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
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
    </StyledHeaderMenu>
  );
};




const StyledHeaderMenu = styled.nav`
ul{
display: flex;
gap: 30px;
justify-content: center;
}

@media ${theme.media.tablet}{
  
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


