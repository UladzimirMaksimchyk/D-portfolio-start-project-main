import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

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
    gap: 16px;
    margin: 0 auto;


    ${Button} {
width: 10px;
height:  50px;
padding: 12px 25px 12px 25px;
border-radius: 8px ;
background-color: #ff00f7;
font-family: Poppins;
font-size: 16px;
font-weight: 600;

    }
`
const Field = styled.input`
    
`



export { }