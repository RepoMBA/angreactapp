import React, { useState } from "react";
import LeftNav from "../../Components/LeftNav";
import TopNav from "../../Components/TopNav";

import "../../assets/css/Settings.css";

const Settings = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "This is my profile bio.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newUser, setNewUser] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUser({ ...newUser });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setNewUser({ ...user });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <>
      <div className="flex bg-[#F7F6FD]">
        <LeftNav />

        <div className="w-full h-[100vh] overflow-auto">
          <TopNav />

          <div className="profile-container">
            <h1>Profile Page</h1>
            <div className="profile-field">
              <div>
                <label className="profile-label">Name:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    className="profile-input"
                  />
                ) : (
                  <span>{user.name}</span>
                )}
              </div>
            </div>
            <div className="profile-field">
              <div>
                <label className="profile-label">Email:</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="profile-input"
                  />
                ) : (
                  <span>{user.email}</span>
                )}
              </div>
            </div>
            <div className="profile-field">
              <div>
                <label className="profile-label">Bio:</label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={newUser.bio}
                    onChange={handleInputChange}
                    className="profile-textarea"
                  />
                ) : (
                  <p>{user.bio}</p>
                )}
              </div>
            </div>
            <div className="profile-buttons">
              {isEditing ? (
                <div>
                  <button onClick={handleSaveClick} className="save">
                    Save
                  </button>
                  <button onClick={handleCancelClick} className="cancel">
                    Cancel
                  </button>
                </div>
              ) : (
                <button onClick={handleEditClick}>Edit</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
