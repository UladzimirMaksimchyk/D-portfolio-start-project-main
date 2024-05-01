import React from "react";
import { styled } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import photo from "../../../assets/images/IMG_4173__1_-removebg-preview.webp"


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <Div>
                        <Hello>
                            Hello, i’m
                        </Hello>
                        <Name>
                            Uladzimir <span>Maksimchyk</span>
                        </Name>
                        <MainTitle>
                        a freelance UX Designer
                        </MainTitle>
                        <Buttons>
                        <Button>
                            About me
                            {/* <Icon iconId={'git'} /> */}
                        </Button>
                        <Button1>
                            Projects
                            {/* <Icon iconId={'git'} /> */}
                        </Button1>

                        </Buttons>
                    </Div>
                    <Photo src={photo} alt="" />
                </FlexWrapper>
            </Container>
        </StyledMain>
    )

};


const StyledMain = styled.section`
        min-height: 100vh;
        background-color:${theme.colors.accent};
        color:${theme.colors.font};
        display: flex;
    `

const Hello = styled.span`
font-family: Poppins;
font-size: 32px;
font-weight: 600;
`

const Name = styled.h3`
font-family: Poppins;
font-size: 42px;
font-weight: 600;

span {

    position: relative;
    z-index: 0;

    &::before{
        content: "";
        display: inline-block;
        width: 100%;
        height: 12px;
background-color: #ff00f7;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
}

`

const MainTitle = styled.h1`
font-family: Poppins;
font-size: 18px;
font-weight: 500;

`

const Buttons = styled.div`
    display: flex;
    gap: 30px;
    margin-top:30px;
`

const Button = styled.button`
    width: 160px;
    height: 50px;
    background: #ff00f7 ;
color: snow;
border-radius:10px;

&:hover{
transform: rotate(360deg);
transition: 3s;
}
`
const Button1 = styled.button`
width:158px;
height: 48px;
border-radius: 10px;
border: 2px solid #ff00f7;

&:hover{
    transform: translate(20px,20px);
}

 `

    const Div = styled.div`
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    /* width: 100vh;
    height: 100vh; */
    `

const Photo = styled.img`
    width: 400px;
height: 400px;
object-fit: cover;
border-radius:  150px ;
`


export { }