import React, { useState } from 'react';
import './ticketform.comp.css';
import { propTypes } from 'react-bootstrap/esm/Image';
const TicketForm = ({ handleAddTicket }) => {
  const [subject, setSubject] = useState('');
  const [issue, setIssue] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if subject, issue, and details are not empty
     if (subject.trim() !== '' && issue.trim() !== '' && details.trim() !== '') {
      const newTicket = {
        subject,
        issue,
        details
      };
      handleAddTicket(newTicket);
      console.log(newTicket);
      // Reset form fields
      setSubject('');
      setIssue('');
      setDetails('');
    } else {
      alert('Please fill out all fields.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="subject">Subject/Train ID:</label>
        <input
          type="text"
          className="form-control"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="issue">Issue Found At:(Replace data type by departure date)</label>
        <input
          type="text"
          className="form-control"
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="details" >Details:</label>
        <textarea
          className="form-control"
          id="details"
          rows="3"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit"  className="btn btn-primary"style={{ marginTop: '20px' }}> Add New Ticket</button>
    </form>
  );
};



export default TicketForm;

