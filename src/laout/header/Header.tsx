import React from "react";
import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Title } from "../../components/title/Title";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";


const items = ["Home", "About me", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>

            <Container>

                <FlexWrapper justify={"space-between"} align={"center"}>

                    {/* <Logo /> */}
                    <Title />
                    <HeaderMenu menuItems={items} />

                </FlexWrapper>

            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color:snow;
padding: 0;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 99999;
`
