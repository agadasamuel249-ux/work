import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Join() {
  const[formData, setFormData] =useState({
    firstName:"",
    lastName:"",
    email: "",
    phone: "",
    gender: "",
    birthDate: "",
    plan: "",
    message: "",
    agree: false,

  });
  const[errors, setErrors] =useState({});
  const handleChange =(e) =>{
    const{name, value, type, checked} = e.target;


    setFormData({
      ...formData,
      [name]:type=== "checkbox"? checked:value,
    });

    if (errors[name]){
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    let newErrors ={};

    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName =true;
    if (!formData.email) newErrors.email =true;
    if (!formData.phone) newErrors.phone =true;
    if(!formData.gender|| formData.gender ==="Choose") newErrors.gender =true;
    if (!formData.birthDate) newErrors.birthDate = true;
    if (!formData.plan) newErrors.plan = true;

    setErrors(newErrors);



    if(Object.keys(newErrors).length=== 0){
      alert("form submitted succesfully!")
      setFormData({
        firstName:"",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        birthDate: "",
        plan: "",
        message: "",
        agree: false,
      });
    }


  };

  return (
<>
<section className="join-hero">
    <div className="join-overlay"></div>
    <div className="join-hero-text">
        <p className="join-us">Join</p>
        <p className="home-join">
          <Link to= "/">Home</Link><span>/join</span></p>
    </div>
</section>
<div className="join-container">
    
      <div className="join-left">
        <img
          src="/images/c2.webp" 
          alt="Gym Athlete"
        />
      </div>

      
      <div className="join-right">
        <h2 className="join-title">Join Our Gym</h2>

        <form className="join-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={errors.firstName ? "error": ""}/>
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={errors.lastName ? "error": ""} />
            </div>
          </div>

          <div className="input-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={errors.email ? "error" : ""}/>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className={errors.phone ? "error": ""}/>
            </div>
          </div>

          <div className="input-row">
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className={errors.gender ? "error" : ""}>
                <option>Choose</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="form-group">
              <label>Birth Date</label>
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} className={errors.birthDate ? "error" : ""} />
            </div>
          </div>

          <div className="form-group">
            <label>Select Plan</label>
            <select name="plan" value={formData.plan} onChange={handleChange} className={errors.plan ? "error" : ""}>
              <option value="">Choose</option>
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <div className="form-group">
            <label>Have Any Message?</label>
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} ></textarea>
          </div>

          <div className="checkbox-row">
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange}/>
            <p className={errors.agree ? "error-text" : ""}>I agree to the Terms and Conditions.</p>
          </div>

          <button className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
    <section className='join-price-plans'> 
        <div className='join-pricing-content'> 
          <h4>Pricing Plans</h4>

          <p className='join-text-one'> 
            Choose the Perfect Plan<br/>
            That Truly Fits You
          </p>

          <p>
            Flexible membership options for every lifestyle, from single sessions to full<br/>
            packages with world-class facilities.
          </p>
        </div>
         
      <div className="join-plans-container">

       
        <div className="join-plan-card">
          <h2>3 Months Plan</h2>
          <p className="join-plan-sub">Perfect for Starters</p>

          <h1 className="join-plan-price">$120 <span>/3 months</span></h1>

          <h3>Benefits:</h3>
          <ul>
            <li>Unlimited gym access & equipment use.</li>
            <li>Access to all group fitness classes.</li>
            <li>Free locker & shower usage.</li>
            <li>Monthly body composition tracking.</li>
            <li>10% discount on personal training.</li>
          </ul>

          <div className="join-plan-footer">
           
          </div>
        </div>

      
        <div className="join-plan-card">
          <h2>6 Months Plan</h2>
          <p className="join-plan-sub">Commit to Your Fitness</p>

          <h1 className="join-plan-price">$210 <span>/6 months</span></h1>

          <h3>Benefits:</h3>
          <ul>
            <li>Unlimited gym access & equipment use.</li>
            <li>Access to all group fitness classes.</li>
            <li>Free locker & shower usage.</li>
            <li>Monthly body composition tracking.</li>
            <li>15% off personal training sessions.</li>
          </ul>

          <div className="join-plan-footer">
            
          </div>
        </div>

    
        <div className="join-plan-card">
          <h2>12 Months Plan</h2>
          <p className="join-plan-sub">Best Value Package</p>

          <h1 className="join-plan-price">$360 <span>/year</span></h1>

          <h3>Benefits:</h3>
          <ul>
            <li>Unlimited gym access & equipment use.</li>
            <li>Access to all group fitness classes.</li>
            <li>Free locker & shower usage.</li>
            <li>Monthly body composition tracking.</li>
            <li>25% off personal training sessions.</li>
          </ul>

          <div className="join-plan-footer">
            
          </div>
        </div>

      </div>
      </section>
 

    



</>
  );
}
