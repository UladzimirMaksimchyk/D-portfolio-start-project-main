import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

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
                <span></span>
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
       text-align: start;
    `

const Name = styled.h3`
font-family: Poppins;
font-size: 24px;
font-weight: 600;
text-align: left;

    `
const Pagination = styled.span`
span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;
    background-color: red;
}
    
`

export { }