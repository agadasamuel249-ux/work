import React from 'react'
import { Link } from 'react-router-dom'

export default function Prices() {
  return (
    <>    
    <section className='prices-hero'>
        <div className='prices-overlay'></div>
        <div className='prices-hero-text'>
            <p className='prices-first-text'>Pricing</p>
            <p className='prices-second-text'>
                <Link to="/">Home</Link> <span>/Pricing</span>

            </p>
        </div>

    </section>


        <div className="plans-container">
    
           
            <div className="plan-card">
              <h2>3 Months Plan</h2>
              <p className="plan-sub">Perfect for Starters</p>
    
              <h1 className="plan-price">$120 <span>/3 months</span></h1>
    
              <h3>Benefits:</h3>
              <ul>
                <li>Unlimited gym access & equipment use.</li>
                <li>Access to all group fitness classes.</li>
                <li>Free locker & shower usage.</li>
                <li>Monthly body composition tracking.</li>
                <li>10% discount on personal training.</li>
              </ul>
    
              <div className="plan-footer">
                <Link to="/Join"><button className="choose-btn">CHOOSE PLAN</button></Link>
                
              </div>
            </div>
    
          
            <div className="plan-card">
              <h2>6 Months Plan</h2>
              <p className="plan-sub">Commit to Your Fitness</p>
    
              <h1 className="plan-price">$210 <span>/6 months</span></h1>
    
              <h3>Benefits:</h3>
              <ul>
                <li>Unlimited gym access & equipment use.</li>
                <li>Access to all group fitness classes.</li>
                <li>Free locker & shower usage.</li>
                <li>Monthly body composition tracking.</li>
                <li>15% off personal training sessions.</li>
              </ul>
    
              <div className="plan-footer">
                <Link to= "/Join"> <button className="choose-btn">CHOOSE PLAN</button></Link>
               
              </div>
            </div>
    
        
            <div className="plan-card">
              <h2>12 Months Plan</h2>
              <p className="plan-sub">Best Value Package</p>
    
              <h1 className="plan-price">$360 <span>/year</span></h1>
    
              <h3>Benefits:</h3>
              <ul>
                <li>Unlimited gym access & equipment use.</li>
                <li>Access to all group fitness classes.</li>
                <li>Free locker & shower usage.</li>
                <li>Monthly body composition tracking.</li>
                <li>25% off personal training sessions.</li>
              </ul>
    
              <div className="plan-footer">
                <Link to= "/Join"><button className="choose-btn">CHOOSE PLAN</button></Link>
                
              </div>
            </div>
    
        </div>

        <section className="cta-contact">
          <h2>Ready to take the first step towards your fitness goals?</h2>
          <button className="cta-contact-btn start-slide">
            <Link to="/join">JOIN NOW</Link></button>
       </section>

    
    
    
    </>
   
  )
}


