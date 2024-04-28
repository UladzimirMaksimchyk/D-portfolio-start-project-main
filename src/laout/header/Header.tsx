import React from "react";
import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Title } from "../../components/title/Title";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = ["Home", "About me", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                {/* <Logo /> */}
                <Title />
                <Menu menuItems={items} />

                </FlexWrapper>

            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color:snow;
`
