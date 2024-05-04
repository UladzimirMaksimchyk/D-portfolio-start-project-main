import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>
                    Contact me, let’s make magic together
                </SectionTitle>
                <StyledForm>
                    <Field placeholder={"Name:"} />
                    <Field placeholder={"Email:"} />
                    <Field placeholder={"Message:"} as={"textarea"} />
                    <Button type={"submit"}>
                        Send
                    </Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );


};

const StyledContacts = styled.section`

`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
textarea{
    resize: none;
    height: 155px;
}

    ${Button} {
width: 110px;
height:  30px;
padding: 12px 25px 12px 25px;
border-radius: 8px ;
background-color: #ff00f7;
font-family: Poppins sans-serif;
font-size: 14px;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;

    }
`
const Field = styled.input`
width: 100%;
border: 2px solid ${theme.colors.accent};
padding: 7px 15px;
font-family: Poppins;
font-size: 18px;
font-weight: 500;
line-height: 32px;
text-align: left;
color: ${theme.colors.font};

&::placeholder{
    color: ${theme.colors.placeholderColor};
}
`



export { }