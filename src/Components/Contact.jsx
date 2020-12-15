import React from "react";
import  "../NCSS/ContactPage.css"
import ContactForm from "../FormsComponent/ContactForm";
const Contact = () => {
    return (
        <>
            <div className="contact-box">
                <h1>Welcome To Contact Form</h1><br /><br/>
                <ContactForm/>
            </div>
          </>
    )
}
export default Contact;