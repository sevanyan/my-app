import preloader from "../../assets/images/preloader.svg";
import React from "react";


let Preloader = (props) => {
    return <div    style={{backroundColor: 'white'}}>
        <img src = {preloader} width={100} alt={"preloader"}/>
    </div>
}

export default Preloader