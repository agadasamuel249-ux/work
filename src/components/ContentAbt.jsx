import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react';
import"../App.css"
import { delay } from 'motion';

export default function ContentAbt() {
  const slideLeft={
    hidden:{opacity:0, x: -70},
    visible:{
      opacity:1,
      x:0,
      transition:{duration:0.9, ease: "easeOut", delay:0}
    }
  }
  const slideUp={
    hidden:{opacity:0, y: 70},
    visible:{
      opacity:1,
      y:0,
      transition:{ duration: 0.9, ease: "easeOut", delay:0}
    }
  }
  const slideRight={
    hidden: {opacity: 0, x:-70},
    visible:{
      opacity:1,
      x:0,
      transition:{ duration: 0.9, ease: "easeOut", delay: 0}

    }

  }
  const featureContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const featureAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <>
    <section className="about-hero">
      <div className='about-overlay'></div>
    <motion.div className="about-hero-text"
    initial ={{opacity: 0, y: 200}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 3, ease: "easeOut"}}>
      
      <p className='about-us'> About Us</p>
      <p className="home-about">
        <Link to="/"> Home </Link> <span>/ About</span>
      </p>
    </motion.div>
    </section>
    <div className='content-wrap'>
      <motion.div className='content-left'>
            <img src= "/images/pexels-carlos-mario-311045289-13616290.jpg"  className='about-img-tall' alt='' />
            <div className='content-box'>
                <h2>25 <span>+</span></h2>
                <p>Certified Trainers</p>
            </div>

        </motion.div>

        <div className='content-middle'>
            <div className='member-box'>
                <h2>2300+</h2>
                <p>Active Member</p>
            </div>
            <img src="/images/shirtless-man-working-out-exercise-machine_839153-3654.jpg" className='content-img' alt='' />
            
        </div>
        <div className='content-right'>
          <h3> About Us</h3>
          <h1>
             We Help You Build a<br />
             Healthier, and<br />
             Fitter You
           </h1>
           <p>
            Founded with a passion for fitness and community, our gym combines state-<br/>
            of-the-art facilities, expert trainers, and personalized programs to help you<br/>
            reach your full potential. Whether you're a beginner or an athlete, our goal is<br/>
            to make every workout enjoyable, safe, and effective.
           </p>
           <ul>
            <li>Modern Equipment & Facilities</li>
            <li>Certified Personal Trainers</li>
            <li>Customized Fitness Programs</li>
            <li>Friendly & Supportive Community</li>
           </ul>
           <div>
            <button className='content-btn'> EXPLORE OUR CLASSES</button>
           </div>

        </div>

    </div>
    <section className='about-bottom'>
      <div className='bottom-overlay'></div>
      <div className='bottom-heading'>
        <h3 className='head-text'>Our Mission & Vision</h3>
      </div>
      <div className='box-holder'>
        <div className='mission-card'>
         <div className='left-text'>
           <h3> Our Mission</h3>
           <p className='mission-text'>
             To empower individuals to live healthier, stronger, and more<br />
             confident lives through expert coaching, motivating environments,<br />
             and a supportive fitness community that keeps every workout<br />
              exciting and sustainable.
           </p>
         </div>

        </div>
       <div className='mission-card'>
        <div className='right-text'>
          <h3> Our Vision</h3>
          <p className='mission-text'>
            To become a global fitness destination that inspires people to<br />
            pursue strength, wellness, and balance in all aspects of life, <br />
            both physically and mentally
          </p>
        </div>
      </div>

      </div>
      
    </section>
     <div className='about-features'>
            <div className='feature-box'>
               <i className='fa fa-heartbeat feature-icon'></i>
                <h3>Passion</h3>
                <p className='the-text'>
                     We breathe fitness- every<br/>
                     rep, every session, every sucess.
                </p>

            
            </div>
            <div className='feature-box'>
                
               <i className='fa fa-users feature-icon'></i>
                <h3>Community</h3>
                <p className='the-text'>
                    Togther we grow stronger,<br/>
                    Motivation thrives when shared.
                </p>

            </div>

            <div className='feature-box'>
                <i className='fa fa-dumbbell feature-icon'></i>
                <h3> Discipline</h3>
                <p className='the-text'>
                    Consistency is the key we push our<br/>
                    Memebers to stay committed
                </p>
            </div>

            <div className='feature-box'>
                <i className='fa fa-star feature-icon'></i>
                <h3>Excellecnce </h3>
                <p className='the-text'>
                    We strive for the highest quality<br/>
                    in service and results.
                </p>
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
