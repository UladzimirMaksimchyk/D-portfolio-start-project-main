import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>
                    The services i offer:
                </SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>

                    <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />
                    <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />
                    <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />
                    <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />
                    <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />
                    <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />

                </FlexWrapper>

            </Container>

        </StyledSkills>
    );


};


const StyledSkills = styled.section`

   `
export { }
