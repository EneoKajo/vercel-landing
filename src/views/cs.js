import React from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import legalDocuments from '../componenets/terms_and_policies.json';
import Footer from '../componenets/footer';
import '../styles/cs.css'
import { useDocumentTitle } from "../utils/useDocumentTitle";

function ServiceErea(){
   useDocumentTitle(
    'Terms and Conditions - Vesper Dream Journal',
    'Terms and conditions for using Vesper dream interpretation app and services.'
  );
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const docType = searchParams.get('doc') || 'terms-and-conditions';

  

  const extendedLegalDocuments = {
    ...legalDocuments,
    "contact-us": {
      "id": "contact-us",
      "title": "Contact Us",
      "lastUpdated": "September 14, 2025",
      "content": "# Contact Us\n\n## Get in Touch\n\nWe'd love to hear from you! Please reach out using any of the following methods:\n\n- **Email:** support@example.com"
    }
  };

  // Safely get the current document with fallback
  const currentDocument = extendedLegalDocuments[docType] || {
    title: "Document Not Found",
    lastUpdated: "N/A",
    content: "# Document not available\n\nPlease select a valid document from the menu."
  };

  const renderContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let currentList = [];
    let listKey = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '') {
        if (elements.length > 0 && elements[elements.length - 1]?.type !== 'br') {
          elements.push(<div key={`space-${i}`} className="legal-spacing"></div>);
        }
        continue;
      }
      
      if (line.startsWith('- ')) {
        currentList.push(
          <li key={`li-${i}`}>{parseInlineFormatting(line.substring(2))}</li>
        );
        continue;
      } else if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${listKey++}`} className="legal-list">{currentList}</ul>
        );
        currentList = [];
      }
      
      if (line.startsWith('# ')) {
        elements.push(<h1 key={i} className="legal-h1">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="legal-h2">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="legal-h3">{line.substring(4)}</h3>);
      } else {
        elements.push(<p key={i} className="legal-paragraph">{parseInlineFormatting(line)}</p>);
      }
    }
    
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${listKey}`} className="legal-list">{currentList}</ul>
      );
    }
    
    return elements;
  };

  const parseInlineFormatting = (text) => {
    if (!text.includes('**')) return text;
    
    const parts = text.split('**');
    return parts.map((part, i) => 
      i % 2 === 1 ? <strong key={i} className="legal-bold">{part}</strong> : part
    );
  };

  return (
    <div className="legal-page-container">
      {/* Header with Back button and Document card */}
      <div className="legal-header">
        <button className="legal-back-btn" onClick={() => navigate('/')}>
          Back
        </button>

        <div className="legal-document-card">
          <div className="legal-document-header">
            <h1 className="legal-document-title">{currentDocument.title}</h1>
            <p className="legal-last-updated">Last updated: {currentDocument.lastUpdated}</p>
          </div>

          <div className="legal-document-body">
            {renderContent(currentDocument.content)}
          </div>
        </div>
      </div>

      {/* Mobile Back Button */}
      <button className="mobile-back-btn" onClick={() => navigate('/')}>
        Back
      </button>

      {/* Footer */}
        <Footer/>
    </div>
  );
}

export default ServiceErea;