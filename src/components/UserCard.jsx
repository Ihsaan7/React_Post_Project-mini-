import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <div className="user-avatar">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="user-basic-info">
          <h3 className="user-name">{name}</h3>
          <p className="user-username">@{username}</p>
        </div>
      </div>

      <div className="user-card-content">
        <div className="user-contact">
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span className="contact-text">{email}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-text">{phone}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {website}
            </a>
          </div>
        </div>

        <div className="user-details">
          <div className="detail-section">
            <h4 className="detail-title">Address</h4>
            <p className="detail-text">
              {address.street}, {address.suite}
              <br />
              {address.city}, {address.zipcode}
            </p>
          </div>

          <div className="detail-section">
            <h4 className="detail-title">Company</h4>
            <p className="detail-text">
              <strong>{company.name}</strong>
              <br />
              <em>{company.catchPhrase}</em>
            </p>
          </div>
          <Link to={`/users/${id}`}>
            <button>View Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
