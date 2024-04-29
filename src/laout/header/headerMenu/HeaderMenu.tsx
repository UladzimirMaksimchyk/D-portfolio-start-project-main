import React from "react";
import styled from "styled-components";


export const HeaderMenu = (props: {menuItems: Array<string>}) => {
  return(
<StyledMenu>
    <ul>
        {props.menuItems.map((item ,index)=>{
return <li key={index}>
    <a href="">{item}</a>
</li>
        })}

    </ul>
</StyledMenu>
  );
};




const StyledMenu = styled.nav`
color: black;
ul{
    display: flex;
    gap: 30px;
    list-style-type :none;
}
   
`