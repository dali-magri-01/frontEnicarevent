import React, { useState } from 'react'
import { BeatLoader } from "react-spinners";

const Maps = () => {
    const [isLoading, setIsLoading] = useState(true); // état local pour suivre si la carte est en cours de chargement

    const handleMapLoad = () => {
      setIsLoading(false); // mise à jour de l'état local lorsque la carte est chargée
    };
  
  return (
    <div>
         {isLoading && (
        <div className="spinner m-5">
          <BeatLoader color="#123abc" />
        </div>
      )}
        <iframe width="660" height="510" id="gmap_canvas" onLoad={handleMapLoad} src="https://maps.google.com/maps?q=enicarthage&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}

export default Maps