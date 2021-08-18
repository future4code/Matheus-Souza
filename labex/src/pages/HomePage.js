import React from "react"
import { useHistory } from "react-router-dom";


const  HomePage=()=>{

    const history = useHistory();

      const goLoginPage= () => {
        history.push("/login");
      };

      const goListTripsPage= () => {
        history.push("/trips/list");
      };
    return(
    <p>
    <h1>labex</h1>
    <br/>
     <button
     onClick={goLoginPage}
     >àrea do admin
     </button>
     <br/>
     <button
     onClick={goListTripsPage}
     >ver viagens</button>
    </p>
    )
}
export default HomePage 