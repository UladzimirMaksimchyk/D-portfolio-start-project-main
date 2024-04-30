import React from "react";
import styled from "styled-components";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return <ListItem key={index}>
            <Link href="">
              {item}
              <Mask>
                <span>{item}</span>
              </Mask>
              <Mask>
                <span>{item}</span>
              </Mask>

              </Link>
          </ListItem>
        })}

      </ul>
    </StyledHeaderMenu>
  );
};




const StyledHeaderMenu = styled.nav`
color: black;
ul{
    display: flex;
    gap: 30px;

}
`
const ListItem = styled.li`
  
`
const Link = styled.a`
  font-family: Poppins,sans-serif;
font-size: 20px;
font-weight: 600;
text-align: center;
color:red;

`
const Mask = styled.span`
  
`
