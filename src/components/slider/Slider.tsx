import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

type SliderPropsType = {
    iconId: string
}

export const Slider = (props: SliderPropsType) => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Icon iconId={props.iconId} />
                    <Name>UI & UX DESIGNING</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>

    )
};



const StyledSlider = styled.div`
 border: 1px solid red;
 max-width: 500px;
 display: flex;
 flex-direction: column;
 align-items: center;
 `
const Slide = styled.div`
text-align: center;
    `

const Name = styled.span`
font-family: Poppins;
font-size: 24px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
margin: 22px 0 42px;
display: inline-block;
`


const Pagination = styled.div`

span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: #000000;
    /* background-color: ${theme.colors.font}; */
    border-radius: 20px;


    & + span {
margin-left: 5px;
    }
}
    
`

export { }