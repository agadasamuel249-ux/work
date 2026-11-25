import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export default function PricingPlans() {
   const pricingContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const pricingCard ={
    hidden:{
      opacity: 0,
      y: 60
    },
    visible:{
      opacity: 1,
      y: 0,
      transition:{
        duration:0.8,
        ease: "easeOut"
      }
    }

  }

  return (
    <>
      
      <section className='price-plans'> 
        <div className='pricing-content'> 
          <h4>Pricing Plans</h4>

          <p className='text-one'> 
            Choose the Perfect Plan<br/>
            That Truly Fits You 
          </p>

          <p>
            Flexible membership options for every lifestyle, from single sessions to full<br/>
            packages with world-class facilities.
          </p>
        </div>
         
      <motion.div className="plans-container"
      variants={pricingContainer}
      initial ="hidden"
      whileInView = "visible"
      viewport={{once: false, amount:0.2}}>

       
        <motion.div className="plan-card"
        variants={pricingCard}
        whileHover={{y: -8, scale: 1.02}}>
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
        </motion.div>

      
        <motion.div className="plan-card"
        variants={pricingCard}
        whileHover={{y: -8, scale: 1.02}}>
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
        </motion.div>

    
        <motion.div className="plan-card"
        variants={pricingCard}
        whileHover={{y: 8, scale: 1.02}}>
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
        </motion.div>

      </motion.div>
      </section>

     
    </>
  )
}




// import React from 'react'
// import '../App.css'

// export default function PricingPlans() {
//   return (
//     <>
//     <section className='price-plans'> 
//          <div className='pricing-content'> 
//             <h4> pricing plans</h4>
//             <p className='text-one'> 
//                 Choose the Perfect Plan<br/>
//                 That Truly Fits you
//             </p>

//             <p>
//                 Flexible memebership options for every lifestyle, from single sessions to full<br/>
//                 packages with world-class facilities
//             </p>
//          </div>
//     <div className='plan-card'>
//     <h2 className='plan-title'>3 Month Plan </h2>
//     <p className='plan-subtitle'>Peftect for starters</p>
//     <h1 className='plan-pice'>$120 <span>/3momths</span></h1>
//     <h3 className='benefits-head'> Benefits:</h3>
//     <ul className='benefits-list'>
//         <li> Unlimited gym access $ use of equipment.</li>
//         <l1> Access to all group fitness classes.</l1>
//         <li>Free locker & shower usage. </li>
//         <li> Monthly body composition tracking.</li>
//         <li>10% discount on personal training.</li>
//     </ul>
//     <div className='plan-footer'>
//         <button className='choose-btn'>CHOOSE PLAN</button>

//     </div>
    
//    </div>
//    <div className='plan-card'>
//         <h2 className='plan-title'>6 Month Plan</h2>
//         <p className='plan-subtitle'>Commit to Your Fitness</p>
//         <h1 className='plan-price'>$210 <span>/6months</span></h1>
//         <h3 className='benefits-head'> Benefits:</h3>
//         <ul className='benefits-list'>
//             <li >Unlimited gym access & use of equipment.</li>
//             <li>Free locker & shower usage. </li>
//             <li> Monthly body composition tracking.</li>
//             <li>15% discount on personal training.</li>


//         </ul>
//         <div className='plan-footer'>
//             <button className='choose-btn'>CHOOSE PLAN</button>
//         </div>
//     </div>
//     <div className='plan-card'>
//         <h2 className='plan-title'>12 Month Plan</h2>
//         <p className='plan-subtitle'>Commit to Your Fitness</p>
//         <h1 className='plan-price'>$380 <span>/12months</span></h1>
//         <h3 className='benefits-head'> Benefits:</h3>
//         <ul className='benefits-list'>
//             <li >Unlimited gym access & use of equipment.</li>
//             <li>Free locker & shower usage. </li>
//             <li> Monthly body composition tracking.</li>
//             <li>25% discount on personal training.</li>


//         </ul>
//         <div className='plan-footer'>
//             <button className='choose-btn'>CHOOSE PLAN</button>
//         </div>
//     </div>

//     </section>
   
    
    
//     </>
    
//   )
// }
