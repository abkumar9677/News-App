import React from 'react';
import './index';
export default function Header(){
   function refreshPage() {
    window.location.reload(false);
  }
  
    return(
      <>
        <div className="head" style={{height:'40px',backgroundColor:'#e3dbdb'}}>
        <button className="btn" style={{backgroundColor:'#000',color:'white',padding:'10px',borderRadius:'3px'}} onClick={refreshPage}>
          Show Latest News
        </button>
        </div>
      </>
    );
  }
