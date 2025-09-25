import React from "react";
import "../styles/delete-account.css";

function DeleteAccount() {
  return (
    <>
      <div className="delete-acc-container">
        <div className="delete-card">
          <h1>Delete Your Vesper Account</h1>

          <p>
            To permanently delete your Vesper Dream Interpreter account and
            all associated data, please email us with your account details.
          </p>

          <p>When you contact us, please include:</p>
          <ul>
            <li>Your registered email address</li>
            <li>Subject line: "Delete My Account"</li>
            <li>
              Confirmation that you want all dreams and account data permanently
              deleted
            </li>
          </ul>

          <p>
            We will process your deletion request within 7 business days and
            send you a confirmation email once completed.
          </p>

          <button
            onClick={() => window.location.href = 'mailto:support@vesperapp.com?subject=Delete My Account'}
            className="delete-button"
          >
            Email Us to Delete Account
          </button>

          <p>
            <strong>Note:</strong> This action cannot be undone. All your
            dreams, interpretations, and account data will be permanently
            removed.
          </p>
        </div>
      </div>
    </>
  );
}

export default DeleteAccount;
