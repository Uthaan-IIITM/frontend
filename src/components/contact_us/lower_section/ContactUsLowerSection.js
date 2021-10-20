import React from "react";
import EmailValidator from "email-validator";

import "../../../styles/contact_us/contact_us_lower_sec.css";

import { googleMapsEmbedURL } from "../../../utils/GeneralConstants";
import { message } from "./../../../services/contact.service";

function ContactUsLowerSection() {
  async function handleFormSubmit(elements) {
    if (elements.name.value.length < 2 || elements.message.value.length < 10) {
      alert("Please fill all the fields properly");
      return;
    }

    if (!EmailValidator.validate(elements.email.value)) {
      alert("Please enter a valid email address");
      return;
    }
    let response = await message(
      elements.name.value,
      elements.email.value,
      elements.phone.value,
      elements.message.value
    );

    if (response.status === 200) {
      for (let index = 0; index < elements.length; index++) {
        elements[index].value = "";
      }
      alert("Message sent successfully");
    } else {
      alert("Message sending failed");
    }
  }

  return (
    <div className="contact-us-lower-sec-primary-wrapper">
      <div className="contact-us-lower-sec-left-wrapper">
        <form
          className="contact-us-lower-sec-form-wrapper"
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit(e.target.elements);
          }}
        >
          <h3 className="contact-us-lower-sec-form-heading">
            Drop Us A Message
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            minLength="2"
            className="contact-us-lower-sec-form-inputs"
          />
          <input
            type="email"
            name="email"
            placeholder="Mail"
            className="contact-us-lower-sec-form-inputs"
          />
          <input
            name="phone"
            type="text"
            pattern="[789]\d{9,9}"
            title="Please enter valid phone number"
            placeholder="Phone"
            className="contact-us-lower-sec-form-inputs"
          />
          <textarea
            placeholder="Message"
            name="message"
            minLength="10"
            className="contact-us-lower-sec-form-inputs contact-us-lower-sec-form-inputs-text-area"
          />
          <button
            className="contact-us-lower-sec-form-submit-btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="contact-us-lower-sec-right-wrapper">
        <div className="contact-us-lower-sec-map-embed-wrapper">
          <iframe
            src={googleMapsEmbedURL}
            loading="lazy"
            className="contact-us-lower-sec-map-embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUsLowerSection;
