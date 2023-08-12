import React from "react";
import BackendImg from "./images/backendImg.png";

function CardComponent() {
  return (
    <div className="card mx-5 mx-md-0 pb-5">
      <img
        src={BackendImg}
        className="card-img-top mx-auto mt-3"
        alt="Card"
        style={{ width: "150px" }}
      />
      <div className="card-body text-center">
        <h3 className="card-title py-3">Backend Technologies</h3>
        <h6 className="py-3">Languages/Frameworks:</h6>
        <h6 className="text-secondary">
          Python, Java, Node.js, Express.js, Flask, SQL, MongoDB
        </h6>
        <h6 className="pt-4">Dev Tools I use:</h6>
      </div>
      <ul className="list-group list-group-flush border-0">
        <li className="list-group-item text-center text-secondary border-0">
          IntelliJ
        </li>
        <li className="list-group-item text-center text-secondary border-0">
          PyCharm
        </li>
        <li className="list-group-item text-center text-secondary border-0">
          Android Studio
        </li>
        <li className="list-group-item text-center text-secondary border-0">
          BitBucket
        </li>
        <li className="list-group-item text-center text-secondary border-0">
          Bamboo
        </li>
        <li className="list-group-item text-center text-secondary border-0">
          GitHub
        </li>
        <li className="list-group-item text-center text-secondary border-0">
          Docker
        </li>
      </ul>
    </div>
  );
}

export default CardComponent;
