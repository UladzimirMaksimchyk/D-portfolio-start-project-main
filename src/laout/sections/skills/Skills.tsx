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
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />
                <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />
                <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />
                <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />
                <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />
                <Skill iconId={"git"} title={"HTML5"} description={"I can use version control systems well, and Git & Mecurial are my go-to tool."} />

            </FlexWrapper>

        </StyledSkills>
    );


};


const StyledSkills = styled.section`
     background-color: #010116;
    min-height: 100vh;
    color: snow;
    /* padding: 0px 120px; */
   `
   export{}
