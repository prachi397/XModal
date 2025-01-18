import React, { useState } from "react";

const FormModal = ({setIsModalOpen}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState(null);

  function handleChange(e) {
    const { id, value } = e.target;
    if (id === "username") {
      setUserName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "phone") {
      setPhone(value);
    } else if (id === "dob") {
      setDob(value);
    }
  }

  function validation() {
    if (!userName || !email || !phone || !dob) {
      alert("All fields are mandatory. Please fill out all fields.");
      return false;
    }
    if (phone.length < 10 || phone.length > 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }
    if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return false;
    }
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }
    return true;
  }
  
  function handleFormSubmit(e){
    e.preventDefault();
    if(validation()){
        alert("Form submitted successfully!");
        setUserName('');
        setEmail('');
        setPhone('');
        setDob('');
        setIsModalOpen(false);
    }
  }
  return (
    <div className="modal" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleFormSubmit}>
          <h3>UserName:</h3>
          <input
            type="text"
            id="username"
            required
            value={userName}
            onChange={handleChange}
          />
          <h3>Email Address:</h3>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={handleChange}
          />
          <h3>Phone Number:</h3>
          <input
            type="text"
            id="phone"
            required
            value={phone}
            onChange={handleChange}
          />
          <h3>Date of Birth:</h3>
          <input
            type="date"
            id="dob"
            required
            value={dob}
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default FormModal;
