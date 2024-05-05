import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Uladzimir</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewbox={"0 0 21px 21px"} iconId={"git"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewbox={"0 0 21px 21px"} iconId={"git"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewbox={"0 0 21px 21px"} iconId={"git"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewbox={"0 0 21px 21px"} iconId={"git"} />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Uladzimir Maksimchyk, All Rights Reserved.</Copyright>

            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color: ${theme.colors.primaryBg};
`
const Name = styled.span`
    
`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`
    
`


const SocialLink = styled.a`
        
`

const Copyright = styled.small`
        
`



export { }