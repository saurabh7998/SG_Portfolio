import React from "react";


function CardComponent({img, mainTitle, heading1, text1, heading2, skills}) {
    return (
        <div className="card mx-5 mx-md-0" style={{minHeight: "0"}}>
            <img
                src={img}
                className="card-img-top mx-auto mt-3"
                alt="Card"
                style={{maxWidth: "150px"}}
            />
            <div className="card-body text-center">
                <h3 className="card-title py-3">{mainTitle}</h3>
                <h6 className="py-3">{heading1}:</h6>
                <h6 className="text-secondary">
                    {text1}
                </h6>
                <h6 className="py-3">{heading2}:</h6>
                <ul className="list-group list-group-flush border-0 mt-0">
                    {
                        skills.map((skill, index) => {
                            return (
                                <li key={index}
                                    className="list-group-item text-center
                                    text-secondary border-0">
                                    <span className="badge bg-dark-subtle border
                                     border-dark-subtle text-dark-emphasis rounded-pill">
                                        {skill}
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default CardComponent;
