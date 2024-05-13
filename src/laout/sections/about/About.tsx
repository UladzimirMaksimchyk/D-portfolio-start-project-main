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
import { Button } from "../../../components/Button";


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
                <AboutTitles>
                    <AboutTitle>
                        5+
                    </AboutTitle>
                    <AboutTextSec>
                        Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.
                    </AboutTextSec>
                    <Button>
                        it-Incubator
                    </Button>
                </AboutTitles>
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


const AboutText = styled.p`
font-family: Poppins;
font-size: 18px;
font-weight: 500;
line-height: 32px;
text-align: left;

`
const AboutTitle = styled.span`
font-family: Poppins;
font-size: 96px;
font-weight: 600;
line-height: 144px;
text-align: left;
color: #ff00f7;
/* color: ${theme.colors.accent}; */
    
`
const AboutTextSec = styled.span`
font-family: Poppins;
font-size: 24px;
font-weight: 500;
line-height: 36px;
text-align: left;

`
const AboutTitles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    ${Button}{
    opacity: 0;
    width: 260px;
    height: 80px;
    background-color: #ff00f7;
    /* background-color: ${theme.colors.accent}; */
    color: ${theme.colors.font};
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    border-radius: 14px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

&::before{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
        backdrop-filter: blur(3px);
        opacity: 0;
    }


&:hover{

    &::before {
        opacity: 1;
    }

    ${Button}{
        opacity: 1;
    }

}

@media ${theme.media.tablet}{
    &::before {
        opacity: 1;
    }

    ${Button}{
        opacity: 1;
    }

}


`


export { }