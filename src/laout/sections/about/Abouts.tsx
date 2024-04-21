import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";


type AboutsPropsType = {
    iconId?: string
    title?: string
    description?: string
}

export const Abouts = (props: AboutsPropsType) => {
    return (

        <StyledAbouts>
            <Icon iconId="{props.iconId"/>
            <AboutsTitle>{props.title}</AboutsTitle>
            <AboutsTitle>{props.title}</AboutsTitle>

            {/* <AboutsText>{props.description}</AboutsText> */}
        </StyledAbouts>

    );


};




const StyledAbouts = styled.div`
width: 33%;
    
`
const AboutsTitle = styled.h3`
    
`
// const AboutsText = styled.p`
        
//     `
// export { }

export{}