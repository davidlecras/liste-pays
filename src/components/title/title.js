import React from 'react';

const title=(props)=>{
  return(
    <h1 className="text-center bg-info text-white m-3 p-3 border">{props.children}</h1>
  )
}

export default title;