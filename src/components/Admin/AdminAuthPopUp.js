import React from "react";

import "../../styles/admin/admin_auth.css";

function AdminAuthPopUp({ hadleAdminFormSubmit }) {
  return (
    <form
      className="admin-auth-popup-primary-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        hadleAdminFormSubmit(e.target.elements);
      }}
    >
      <h3 className="admin-auth-popup-form-heading">Admin login</h3>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="admin-auth-popup-form-inputs"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        minLength="6"
        className="admin-auth-popup-form-inputs"
      />

      <button className="admin-auth-popup-form-submit-btn" type="submit">
        Login
      </button>
    </form>
  );
}

export default AdminAuthPopUp;
