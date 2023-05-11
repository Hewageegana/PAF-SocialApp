import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/profile.css";
import loginimg from "../../Assets/images/photo1.jpeg";
import swal from "sweetalert";

export default function Profile() {
  return (
    <>
      <div className="container">
        <h1>User Profile Management</h1>
        <form>
          <div className="avatar">
            <img src="https://via.placeholder.com/150" alt="Profile Picture" />
          </div>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <div className="buttons">
            <button type="button" class="btn btn-success">
              Save changes
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-danger">
              Selete Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
