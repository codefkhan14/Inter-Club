import React from 'react'
import '../styles/ContactUs.css'
function ContactUs() {
  return (
    <>
    <div className="contactDetail">
   <h2>Get In Touch</h2>
   <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, hic?
   </p>
   <form>
     <div className="input-group">
       <input type="text" required placeholder="Your Name" />
     </div>
     <div className="input-group">
       <input type="text" required placeholder="Your Email" />
     </div>
     <div className="input-group">
       <input type="text" required placeholder="Subject" />
     </div>
     <div className="input-group">
       <textarea rows="8" placeholder="Message" required></textarea>
     </div>
     <button className='all-btn'>Submit</button>
   </form>
 </div>
 </>
  )
}

export default ContactUs
