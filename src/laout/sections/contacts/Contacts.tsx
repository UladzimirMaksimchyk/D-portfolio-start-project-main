import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";

export const Contacts = () => {
    return (
      <StyledContacts>
        <SectionTitle>
        Contact me, let’s make magic together
        </SectionTitle>
        <StyledForm>
            <Field placeholder={"Name:"}/>
            <Field placeholder={"Email:"}/>
            <Field placeholder={"Message:"} as ={"textarea"}/>

        </StyledForm>
      </StyledContacts>
    );


};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: black;
    color: snow;
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Field = styled.input`
    
`





export { }