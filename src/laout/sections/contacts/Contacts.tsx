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
            <Field/>
            <Field/>
            <Field as ={"textarea"}/>

        </StyledForm>
      </StyledContacts>
    )


};

const StyledContacts = styled.section`
    
`
const StyledForm = styled.section`
    
`
const Field = styled.section`
    
`





export { }