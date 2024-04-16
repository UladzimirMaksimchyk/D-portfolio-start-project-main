import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>
            The services i offer:
            </SectionTitle>
            <FlexWrapper>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </FlexWrapper>

        </StyledSkills>
    );


};


const StyledSkills = styled.section`
    background-color: pink;
    min-height: 100vh;
`