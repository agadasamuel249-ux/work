import React, {useState}from 'react'
import "../App.css";
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] =useState({
    yourName:"",
    yourEmail: "",
    phone:"",
    message: "",



  });

  const [errors, setErrors]=useState({});
  const handleChange =(e)=>{
    const{name,  value, }=e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if(errors[name]){
      setErrors({
        ...errors,
        [name]:false,
      });
    }
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    let newErrors ={};
    if (!formData.yourName) newErrors.yourName =true;
    if (!formData.yourEmail) newErrors.yourEmail=true;
    if (!formData.phone) newErrors.phone =true;
    if (!formData.message) newErrors.message = true;
    setErrors(newErrors)
    if(Object.keys(newErrors).length=== 0){
      alert("Message sent successfully!")
      setFormData({
        yourName: "",
        yourEmail: "",
        phone: "",
        message: "",
      })
    }
  };
  return (
    <>
    <section className='contact-hero'>
      <div className='contact-overlay'></div>
      <div className='contact-hero-text'>
        <h3 className='contact-us'> Contact Us</h3>
        <p className='home-contact-us'> 
         <Link to="/">Home </Link> <span>/ Contact Us</span></p>
        
        
      </div> 

    </section>

    <section className='contact-section'>
      <div  className='contact-left'>
          
        <div className='location-item'>
          <h3>New York</h3>
          <p>350 5th Ave, New York, NY 10118</p>
          <p>(212) 555-0134</p>
          <p>nyc@powerflow.com</p>
        </div>

        <div className='location-item'>
          <h3>Chicago</h3>
          <p>233 S Wacker Dr, Chicago, IL 60606</p>
          <p>(312) 555-0147</p>
          <p>chicago@powerflow.com</p>
        </div>
        <div className='location-item'>
          <h3>Miami</h3>
          <p>100 Biscayne Blvd, Miami, FL 33132</p>
          <p>(305) 555-0174</p>
          <p>miami@powerflow.com</p>
        </div>

          {/* second colum*/}
          <div className='location-item'>
            <h3>Los Angeles</h3>
            <p>742 S Hill St, Los Angeles, CA 90014</p>
            <p>(310) 555-0199</p>
            <p>la@powerflow.com</p>


          </div>
        <div className="location-item">
          <h3>Houston</h3>
          <p>1200 Louisiana St, Houston, TX 77002</p>
          <p>(713) 555-0182</p>
          <p>houston@powerflow.com</p>
        </div>

        <div className="location-item">
          <h3>Seattle</h3>
          <p>701 5th Ave, Seattle, WA 98104</p>
          <p>(206) 555-0128</p>
          <p>seattle@powerflow.com</p>
        </div>
      </div>
      <div className='contact-right'>
          <h3 className='form-heading'>
             Have a question, suggestion, or just want to say hi?
            <br />
            We’re here and happy to hear from you!
            
          </h3>
          <form className='contact-form'onSubmit={handleSubmit}>
            <input type='text' name='yourName' placeholder='Your Name'value={formData.yourName } onChange={handleChange} className={errors.yourName? "error": ""}/>
            <input type='email'name='yourEmail' placeholder='Your Email' value={formData.yourEmail} onChange={handleChange} className={errors.yourEmail? "error": ""}/>
            <input type='text' name='phone' placeholder='Your Phone' value={formData.phone} onChange={handleChange} className={errors.phone ? "error" :""}/>
            <textarea  name='message' placeholder='Your Message' value={formData.message} onChange={handleChange} className={errors.message ? "error" : ""}/> 
            <button type='submit' className='send-btn'>
              SEND MESSAGE
            </button>
          </form>
        </div>
    </section>
   <section className="cta-contact">
    <h2>Ready to take the first step towards your fitness goals?</h2>
    <button className="cta-contact-btn start-slide">
      <Link to ="/Join">JOIN NOW</Link></button>
  </section>


    
    
    
    </>
   
  )
}
