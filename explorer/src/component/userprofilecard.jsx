import React from 'react';
import PropTypes from 'prop-types';
import './UserProfileCard.css';

function UserProfileCard({ name, email, profilePicture, phone, address, company }) {
    return (
        <div className="user-profile-card">
            <img className="profile-picture" src={profilePicture} alt={`${name}'s profile`} />
            <h3 className="user-name" >{name}</h3>
            <p className="user-address"> {address}</p>
            <p className="user-phone">{phone}</p>
            <p className="user-email">{email}</p>
            <p className="user-company">{company}</p>
        </div>
    );
}

export default UserProfileCard;
