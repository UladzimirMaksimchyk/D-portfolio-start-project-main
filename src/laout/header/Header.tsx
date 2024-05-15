import React from "react";
import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Title } from "../../components/title/Title";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const items = ["Home", "About me", "Projects", "Contact"]

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    {/* <Logo /> */}
                    <Title />
                    <HeaderMenu menuItems={items} />
                    <MobileMenu menuItems={items} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: ${theme.colors.primaryBg};
padding: 0;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 99999;
`
