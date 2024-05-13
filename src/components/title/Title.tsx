import React from "react";
import { styled } from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";


export const Title = () => {
    return (
        <StyledTitle>
            Uladzimir <span>Maksimchyk</span> 
        </StyledTitle>

    )


};

const StyledTitle = styled.h2`
 ${font({ family: "'Poppins', sans-serif", weight: 600, Fmax: 28, Fmin: 20 })} 
    color:${theme.colors.font};
    /* font-family: Poppins;
    font-size: 28px;
    font-weight: 600; */



span {
position: relative;
z-index: 0;

&::before{
    content: "";
    display: inline-block;
    width: 100%;
    height: 8px;
    background-color: #ff00f7;
    position: absolute;
    bottom: 0;
    z-index: -1;
}
}

`





export { }