// ReferModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ReferModal.css'; // Import the CSS file
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    backgroundColor: 'gray',
    color: 'white', // Optional: To ensure the text is visible on the gray background
    borderRadius: '10px',
    padding: '20px',
    width: '80%',
    maxWidth: '500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)', // Ensures the modal is centered
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1000', // Ensures the modal appears on top
  },
};

const ReferModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    referCode: '',
  });
  const [referralLink, setReferralLink] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



const handleSubmit = async (e) => {
  e.preventDefault();
  const link = `https://yourwebsite.com/referral?code=${formData.referCode}`;
  setReferralLink(link);

  try {
    const response = await fetch('https://refer-and-earn-backend.vercel.app/api/refer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      toast.error('Network response was not ok');
    }
    const data = await response.json();
    toast.success('Success:', data);
  } catch (error) {
    toast.error('Error:', error);
  }
};


  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyles}>
      <button className="closeButton" onClick={onRequestClose}>
        &times;
      </button>
      <h2>Refer a Friend</h2>
      <form onSubmit={handleSubmit} className="referForm">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Refer Code:
          <input type="text" name="referCode" value={formData.referCode} onChange={handleChange} required />
        </label>
        <button type="submit" className="submitButton">Generate Link</button>
      </form>
      {referralLink && (
        <div className="referralLinkContainer">
          <p>Your referral link: {referralLink}</p>
          <CopyToClipboard text={referralLink} onCopy={() => toast.success('Referral link copied to clipboard!')}> 
            <button className="copyButton">Copy to Clipboard</button>
          
          </CopyToClipboard>
        </div>
      )}
    </Modal>
  );
};

export default ReferModal;
