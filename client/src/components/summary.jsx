import React from "react";
import './summary.css'

const Summary = () => {

    return(
        <div  className={`container`}>
            <div className={`left-content`}>
                <p className={`title`}>
                    CS 320: Intro to Software Engineering
                </p>
            </div>
            <div className={`right-content`}>
                <p className={`instructors`}>
                    Instructor: Matthew Rattigan (you) <br/>
                    TA: John Doe<br/>
                    UCA: Jane Doe
                </p>
            </div>         
        </div>
    );


}

export default Summary;