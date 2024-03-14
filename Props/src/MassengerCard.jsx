import React from 'react';

import './MessageCard.css'; 

class MessengerCard extends React.Component {
  render() {
    const { name, job, salary } = this.props;

    return (
      <div className="card">
        <div className="card-header">
          <h2>{name}</h2>
          <p>Job: {job}</p>
          <p>Salary: ${salary}</p>
        </div>
      </div>
    );
  }
}

// Usage:
const Message = () => {
  return (
    <div>
      <MessengerCard name="John Doe" job="Software Engineer" salary={80000} />
      <MessengerCard name="Alice Smith" job="Product Manager" salary={95000} />
    </div>
  );
};

export default Message;
