import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";


export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Uladzimir</Name>
            <SocialIconList> 
                <SocialIconLink>
                    <Icon iconId=""/>
                </SocialIconLink>
            </SocialIconList>
            <Copyright>© 2024 Uladzimir Maksimchyk, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`
const Name = styled.span`
    
`

const SocialIconList = styled.ul`
    
`


const SocialIconLink = styled.a`
        
`




export { }