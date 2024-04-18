import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from '../../../assets/images/IMG_4173-_1_.webp'
import { Skill } from "../skills/skill/Skill";


export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>
            About me:
            </SectionTitle>
            <FlexWrapper>
            <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />

            </FlexWrapper>

        </StyledAbout>
    );


};


const StyledAbout = styled.section`
/* background-image: url('../../../assets/images/IMG_4173-_1_.webp'); */
min-height: 100vh;
`
const SectionTitle = styled.h2`
    
`
export { }