import React from 'react';
import Img404 from "../../asset/images/error404.png"

const error404=(props)=>{
  return(
    <div className="container text-center">
    <img src={Img404} alt="erreur 404" width="50%"/>
    <p>La page démandée n'existe pas!</p>
    </div>
  )
}

export default error404;