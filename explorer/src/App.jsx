import React from 'react';
import './App.css';
import UserProfileCard from './component/userprofilecard';

function App() {
  const users = [
    {
      name: 'Robin Carroll',
      email: 'robin@example.com',
      profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg',
      phone: '(519) 628-6266',
      address: 'Louisville, Washington',
      company: 'Summit Consulting Group',
    },
    {
      name: 'Devon Obrien',
      email: 'devon@example.com',
      profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
      phone: '(792) 739-7166',
      address: 'Milwaukee, Missouri',
      company: 'Innovatech Solutions',
    },
    {
      name: 'Kelly Wells',
      email: 'kelly@example.com',
      profilePicture: 'https://randomuser.me/api/portraits/women/65.jpg',
      phone: '(724) 895-3622',
      address: 'Vernon, New Jersey',
      company: 'TechNova Solutions',
    },
  ];

  return (
    <div className="app-container">
      <h1>User Profile Card Task</h1>
      <div className="cards-container">
        {users.map((user, index) => (
          <UserProfileCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
}

export default App;
