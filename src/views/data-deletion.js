import React from "react";
import "../styles/data-deletion.css";

function DataDeletion() {
  return (
    <>
      <div className="data-deletion-container">
        <div className="data-deletion-card">
          <h1>Data Deletion - Vesper Dream App</h1>

          <h2>Delete Individual Dreams</h2>
          <p>You can delete specific dream entries directly through the Vesper app:</p>

          <ol className="data-deletion-steps">
            <li>Open the Vesper Dream Interpreter app</li>
            <li>Go to your <strong>Dreams List</strong></li>
            <li>Find the dream entry you want to delete, and tap it, opening the details of the dream.</li>
            <li>Tap the <strong>delete icon</strong> found at the top right of the screen, (<strong>the red coloured button</strong>)</li>
            <li>Confirm deletion when prompted</li>
          </ol>

          <p>This will permanently remove the selected dream and its AI interpretation from your account.</p>

          <h3>What Gets Deleted</h3>
          <ul className="data-deletion-list">
            <li>The dream content you recorded</li>
            <li>AI-generated interpretation for that dream</li>
            <li>Any tags or categories you assigned</li>
            <li>Date and time information for that entry</li>
          </ul>

          <h2>Delete Your Entire Account</h2>
          <p>
            To permanently delete your Vesper Dream Interpreter account and
            all associated data, please email us with your account details.
          </p>

          <p>When you contact us, please include:</p>
          <ul className="data-deletion-list">
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
            onClick={() => window.location.href = 'mailto:vesperapp.support@gmail.com?subject=Delete My Account'}
            className="data-deletion-button"
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

export default DataDeletion;