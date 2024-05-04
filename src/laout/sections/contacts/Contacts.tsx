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
    min-height: 50vh;
    text-align: center;

`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`
    
`





export { }