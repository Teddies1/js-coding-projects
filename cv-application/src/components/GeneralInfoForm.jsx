import React from "react";

function GeneralInfo(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      };
    
      return (
        <form className="general-form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="firstName" />
    
          <label>Last Name:</label>
          <input type="text" name="lastName" />
    
          <label>Email:</label>
          <input type="email" name="email" />
          
          <label>Phone:</label>
          <input type="number" name="phone" />
    
          <label>Address:</label>
          <input type="text" name="address" />

          {/* ... potentially many more individual input fields */}
          <button type="submit">Submit</button>
        </form>
      );
}

export default GeneralInfo;