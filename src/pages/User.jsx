import React from "react";
import { getUser } from "../../api/users";
import { useLoaderData, Link } from "react-router-dom";

const User = () => {
  const user = useLoaderData();

  return (
    <div className="user-detail-container">
      <div className="user-detail-header">
        <Link to="/users" className="back-link">
          ← Back to Users
        </Link>
      </div>

      <div className="user-profile">
        <div className="user-profile-header">
          <div className="user-detail-avatar">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="user-title-info">
            <h1 className="user-detail-name">{user.name}</h1>
            <p className="user-detail-username">@{user.username}</p>
            <span className="user-detail-id">User ID: {user.id}</span>
          </div>
        </div>

        <div className="user-profile-content">
          <div className="user-info-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <span className="info-value">{user.email}</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{user.phone}</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🌐</span>
                <div className="info-content">
                  <span className="info-label">Website</span>
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="user-info-section">
            <h2 className="section-title">Address</h2>
            <div className="address-card">
              <div className="address-content">
                <p className="address-line">
                  {user.address.street}, {user.address.suite}
                </p>
                <p className="address-line">
                  {user.address.city}, {user.address.zipcode}
                </p>
                <div className="coordinates">
                  <span className="coord-label">Coordinates:</span>
                  <span className="coord-value">
                    {user.address.geo.lat}, {user.address.geo.lng}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="user-info-section">
            <h2 className="section-title">Company</h2>
            <div className="company-card">
              <h3 className="company-name">{user.company.name}</h3>
              <p className="company-catchphrase">
                "{user.company.catchPhrase}"
              </p>
              <p className="company-bs">{user.company.bs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function loader({ request: { signal }, params }) {
  return getUser(params.userId, { signal });
}

export const userRoute = {
  loader,
  element: <User />,
};
