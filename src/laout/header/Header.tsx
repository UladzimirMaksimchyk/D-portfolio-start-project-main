import React from "react";
import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Title } from "../../components/title/Title";
export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
          <Title/>
            <Menu />

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: green;
`