'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header/Header';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add your logic to handle form submission here
    // For example, you can send the formData object to your server using an API call

    // Reset form data after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    // Show success toast message
    toast.success('Thank you for contacting us!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <div className="contact-us-container mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info">
                <h2 className="contact-heading">Get in Touch</h2>
                <p className="contact-description fs-5">
                  Have a question or want to discuss? Feel free to reach out to
                  us using the form or the contact information below.
                </p>
                <div className="contact-details">
                  <div className="contact-detail">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h4 className="fs-4">Address</h4>
                      <p className="fs-5">23 Norman Dunlop Crescent Minto</p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h4 className="fs-4">Phone</h4>
                      <p className="fs-5">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h4 className="fs-4">Email</h4>
                      <p className="fs-5">info@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <h2 className="contact-heading">Contact Form</h2>
                <form onSubmit={submitForm}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
