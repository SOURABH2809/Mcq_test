import React from "react";
import "./Basic.css";


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c180d21c-0b5c-4739-a1da-61c15297b115");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <div className="contact" id='contact us'>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name = 'name' placeholder = 'Enter your name' required />
          <label>Email</label>
          <input type="email" name = 'Email' placeholder = 'Enter your Email' required />
          <label>Gender</label>
          <input type="text" name = 'name' placeholder = 'Enter your Gender' required />
          
          <button className="btn" type="submit">Submit now </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
      

  );
};

export default Contact;
