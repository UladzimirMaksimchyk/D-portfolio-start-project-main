import React from "react";
import styled from "styled-components";


export const HeaderMenu = (props: {menuItems: Array<string>}) => {
  return(
<StyledHeaderMenu>
    <ul>
        {props.menuItems.map((item ,index)=>{
return <ListItem key={index}>
    <Link href="">{item}</Link>
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