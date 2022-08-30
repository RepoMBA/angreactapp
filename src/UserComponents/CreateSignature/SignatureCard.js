import React from "react";

function SignatureCard(props) {
  return (
    <div className="create-signature-card">
      <h5>{props.title}</h5>
      <p>{props.date}</p>
      <div className="d-flex row justify-content-between px-3">
        <p>{props.signatureName}</p>
        <button className="common-btn2">{props.buttonLabel}</button>
      </div>
    </div>
  );
}

export default SignatureCard;
