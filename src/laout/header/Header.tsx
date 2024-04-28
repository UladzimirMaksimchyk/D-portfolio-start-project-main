import React from "react";
import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Title } from "../../components/title/Title";
import { Container } from "../../components/Container";

const items = ["Home", "About me", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                {/* <Logo /> */}
                <Title />
                <Menu menuItems={items} />

            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
display: flex;
justify-content: space-around;
`
