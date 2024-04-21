import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from '../../../assets/images/IMG_4173-_1_.webp'
import { Skill } from "../skills/skill/Skill";
import { Abouts } from "./Abouts";


export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper>
                <SectionTitle>
                    About me:
                </SectionTitle>
                <AboutText>
                    Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I jhave honed my skills in Web Development and advance i have core understanding of advance UI design principles. Here are the major skiills i have.
                </AboutText>
                <AboutTitle>
                5+
                </AboutTitle>
                <AboutText>
                Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.
                </AboutText>
                <Abouts></Abouts>
                <Abouts></Abouts>
                <Abouts></Abouts>
                <Abouts></Abouts>

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

const AboutText = styled.p`
    
`
const AboutTitle = styled.h2`
    
`

export { }