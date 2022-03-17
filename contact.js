const form = document.querySelector("form");
const userName = document.getElementById("Name");
const LastName = document.getElementById("LastName");
const email = document.getElementById("email");
const Massege = document.getElementById("Massege");

function showError(input, message) {
  const formcontrol = input.parentElement;
  formcontrol.className = "formControl error";
  const small = formcontrol.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = "formControl success";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // == value // === vaslue & type
  if (Name.value === "") {
    showError(Name, "Enter your Name pleas");
  } else {
    showSuccess(Name);
  }

  if (LastName.value === "") {
    showError(LastName, "Enter your Last Name pleas ");
  } else {
    showSuccess(LastName);
  }

  if (email.value === "") {
    showError(email, "Enter Email");
  } else {
    showSuccess(email);
  }
  if (Massege.value === "") {
    showError(Massege, "witr your massege");
  } else {
    showSuccess(password2);
  }
});

// -------------------------------------------------------------

const mailTest = document.getElementById("email");
const testMail = document.getElementById("reemail");
function mailValue() {
  if (mailTest === testMail) {
    ContactForm();
    return true;
  } else querySelector("error-message").innerHTML = "error";
}

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("form");
  if (state.succeeded) {
    return <p>Thanks for leaving us a Massage , Mardi Gras!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
