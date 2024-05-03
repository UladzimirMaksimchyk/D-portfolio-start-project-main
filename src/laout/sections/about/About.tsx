import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from '../../../assets/images/IMG_4173-_1_.webp'
import { Skill } from "../skills/skill/Skill";
import { Abouts } from "./Abouts";
import { Slider } from "../../../components/slider/Slider";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle>
                    About me:
                </SectionTitle>
                <AboutText>
                    Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I jhave honed my skills in Web Development and advance i have core understanding of advance UI design principles. Here are the major skiills i have.
                </AboutText>
                <AboutTitle>
                    5+
                </AboutTitle>
                <AboutTextSec>
                    Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.
                </AboutTextSec>
                <FlexWrapper direction={"column"} align={"center"}>
                    {/* <Abouts iconId={"git"}></Abouts>
                <Abouts iconId={"git"}></Abouts>
                <Abouts iconId={"git"}></Abouts>
                <Abouts iconId={"git"}></Abouts> */}
                    <Slider iconId={"git"} />
                </FlexWrapper>

            </Container>

        </StyledAbout>
    );


};


const StyledAbout = styled.section`
min-height: 70vh;
`


const AboutText = styled.div`
font-family: Poppins;
font-size: 18px;
font-weight: 500;
line-height: 32px;
text-align: left;

`
const AboutTitle = styled.h2`
font-family: Poppins;
font-size: 96px;
font-weight: 600;
line-height: 144px;
text-align: left;
color: ${theme.colors.accent};
    
`
const AboutTextSec = styled.h2`
`

export { }