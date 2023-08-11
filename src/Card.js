import React from "react";
import BackendImg from "./backendImg.png";

function CardComponent() {
  return (
    <div className="card">
      <img
        src={BackendImg}
        className="card-img-top mx-auto mt-3"
        alt="Card"
        style={{ width: "150px" }}
      />
      <div className="card-body text-center">
        <h3 className="card-title">Backend Technologies</h3>
        <h5>
          Languages I speak:
          <small className="text-body-secondary">
            {" "}
            Python, Java, JavaScript
          </small>
        </h5>
        <h5>Dev Tools I use:</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center border-0">IntelliJ</li>
        <li className="list-group-item text-center border-0">PyCharm</li>
        <li className="list-group-item text-center border-0">Android Studio</li>
        <li className="list-group-item text-center border-0">BitBucket</li>
        <li className="list-group-item text-center border-0">Bamboo</li>
        <li className="list-group-item text-center border-0">GitHub</li>
        <li className="list-group-item text-center border-0">Docker</li>
      </ul>
    </div>
  );
}

export default CardComponent;
