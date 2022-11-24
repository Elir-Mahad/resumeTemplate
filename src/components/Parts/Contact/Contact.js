import React from "react";
import { ContactBoxes, CBox, CbIcon, CbText } from "./ContactStyles";
import { contactData } from "../../../data/contactData";
function Contact() {
  return (
    <ContactBoxes>
      {contactData?.map((item) => (
        <CBox>
          <CbIcon>{item.icon}</CbIcon>
          <CbText>{item.text}</CbText>
        </CBox>
      ))}
    </ContactBoxes>
  );
}

export default Contact;
