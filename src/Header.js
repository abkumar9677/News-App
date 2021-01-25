import React from 'react';
import './index';
export default function Header(){
   function refreshPage() {
    window.location.reload(false);
  }
  
    return(
      <>
        <div className="head">
        <button className="btn" style={{backgroundColor:'#000',color:'white',padding:'10px',borderRadius:'3px',marginLeft:'225px'}} onClick={refreshPage}>
          Show Latest News
        </button>
        </div>
      </>
    );
  }
