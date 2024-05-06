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
                            <Icon height={"32px"} width={"32px"} viewbox={"0 0 32px 32px"} iconId={"facebook"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"32px"} width={"32px"} viewbox={"0 0 32px 32px"} iconId={"instagram"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"32px"} width={"32px"} viewbox={"0 0 32px 32px"} iconId={"dribble"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"32px"} width={"32px"} viewbox={"0 0 32px 32px"} iconId={"sms"} />
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
    font-family: Poppins;
font-size: 22px;
font-weight: 500;
line-height: 90px;

&:hover{
    text-shadow: 15px 15px 5px #ff00f7;
}

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
font-family: Poppins;
font-size: 12px;
font-weight: 500;
line-height: 27px;

        
`



export { }