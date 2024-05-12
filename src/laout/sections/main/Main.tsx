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
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
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
                                <span>About me</span>
                                <Icon iconId={'user'} width="20px" height="20px" viewbox="0 0 20 20" />
                            </Button>
                            <Button1>
                                Projects
                                <Icon iconId={"vuesax"} width="17px" height="15px" viewbox="2 2 17 15" />
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

/* span {

    position: relative;
    z-index: 0;

    &::before{
        content: "";
        display: inline-block;
        width: 100%;
        height: 8px;
        background-color: #ff00f7;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
} */

`

const MainTitle = styled.h1`
font-family: Poppins;
font-size: 18px;
font-weight: 500;
`

const Buttons = styled.div`
gap: 30px;
margin-top:50px;
display: flex;
justify-content: center;
align-items: center;

`

const Button = styled.button`
width: 160px;
height:  50px;
padding: 12px 25px 12px 25px;
border-radius: 8px ;
background-color: #ff00f7;
font-family: Poppins;
font-size: 16px;
font-weight: 600;


&:hover{
    transform: translate(10px,10px);
/* transform: rotate(360deg);
transition: 3s; */
}
`
const Button1 = styled.button`

width:158px;
height: 48px;
padding: 12px 25px 12px 25px;
border-radius: 8px;
border: 2px solid #ff00f7;
font-family: Poppins;
font-size: 16px;
font-weight: 600;



&:hover{
    transform: translate(10px,10px);
}

 `

const Div = styled.div`
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

`

const Photo = styled.img`
    width: 450px;
height: 450px;
object-fit: cover;
border-radius:  200px;

@media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
}


`

export { }