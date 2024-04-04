import React, { useState } from 'react'
import "./Style/inside.css";

const Inside = () => {

  const [show,setShow]=useState("0");
  

const handleShow=(val)=>{
  setShow(val);
}
  return (
    <div className='container'>
        <div className='card'>
            <img src="https://microage.ca/nwd/wp-content/uploads/sites/39/bb-plugin/cache/data-backup-landscape.jpg" alt="" />
           <div className="textBox">
              <div className='textBox-top'>
              <h3>Data Management</h3>
                  {
                    (show==="1")?<>
                    
                    <p>Data is essential to how a buisness operates and functions.
                          Buisness must make sense fo data and find relavancy
                          in the noise that's created by diverse systems and technologies
                          supporting today's highly connected global economies.In
                          CRM, they usually refer to a CRM system or platform, a tool
                          that helps with contact management,sales management,productivity,
                          and more.
                          </p>
                          </>  :""
                  }
              </div>  
              <button onClick={()=>{handleShow("1")}}>Learn more</button>
           </div>
            
        </div>
        <div className='card'>
            <img src="data:image/jpeg;base64,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" alt="" />
            <div className="textBox">
              <div></div>
              <div className='textBox-bottom'>
                <h3>IT Services</h3>
                <button onClick={() => { handleShow("1") }}>Learn more</button>
              </div>
            </div> 
        </div>
        <div className='card'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9K0n9pqnAKvRFfaM0NQERTd7O1fjCEzrSmg&s" alt="" />
            <div className="textBox">
              <div></div>
                <div className='textBox-bottom'>
                  <h3>BPM</h3>
                  <button onClick={() => { handleShow("1") }}>Learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inside