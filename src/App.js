import React, { useState } from 'react';
import './index.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        yearOfBirth: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}\nPhone: ${formData.phone}\nYear of birth: ${formData.yearOfBirth}`);
        console.log(formData);
    };

    return (
        <form className="registration-form" onSubmit={handleSubmit}>
            <h2>Registration Form</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="year-of-birth">Year of Birth:</label>
                <input type="number" id="year-of-birth" name="yearOfBirth" value={formData.yearOfBirth} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;
