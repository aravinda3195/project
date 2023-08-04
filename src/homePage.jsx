import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    // Regular expression for mobile number validation
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields before submitting
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required.";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (formData.mobile.trim() === "") {
      newErrors.mobile = "Mobile number is required.";
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number. It should be 10 digits.";
    }

    // If there are validation errors, set them in the state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission or any other action when the form is valid
      console.log("Form submitted:", formData);
      navigate("/rating");
    }
  };

  return (
    <div className="rating">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{ textAlign: "center" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" style={{ textAlign: "center" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="mobile" style={{ textAlign: "center" }}>
            Mobile:
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
          {errors.mobile && <p>{errors.mobile}</p>}
        </div>

        <button type="submit" className="rating">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
