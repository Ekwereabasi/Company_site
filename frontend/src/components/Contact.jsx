
import React, { useState } from 'react';
import '../index.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project_info: '',
        file: null,
        subscribe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            file: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await fetch('http://localhost:8000/api/contact/', { // Use full URL including domain
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                alert('Thank you for your message. We will get back to you soon!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    project_info: '',
                    file: null,
                    subscribe: false,
                });
            } else {
                const errorData = await response.json();
                alert('There was an error submitting the form: ' + JSON.stringify(errorData));
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <>
        
          <section className='navWrapper bg-[#0c307a] '>
          <NavBar />
         </section>

          <div className="container">
            <h1>Contact Us</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="project_info">Project Info:</label>
                    <textarea id="project_info" name="project_info" value={formData.project_info} onChange={handleChange} required></textarea>
                </div>
                <div>
                    <label htmlFor="file">File:</label>
                    <input type="file" id="file" name="file" onChange={handleFileChange} />
                </div>
                <div>
                    <label htmlFor="subscribe">
                        <input type="checkbox" id="subscribe" name="subscribe" checked={formData.subscribe} onChange={handleChange} />
                        Subscribe to our newsletter
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
          </div>
        </>
    );
};

export default Contact;
