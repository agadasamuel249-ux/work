import React from 'react'
import { Link } from 'react-router-dom'
import { motion, scale } from 'motion/react'
import "../App.css"
import { delay } from 'motion'

export default function AboutSection() {
     const slideLeft = {
    hidden: { opacity: 0, x: -70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 0}
    }
  }

  const slideUp = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.5 }
    }
  }

  const slideRight = {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 1 }
    }
  }

  // Animation for the feature cards
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
    <div className='about-wrap'>
        <motion.div className='about-left'
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{once: false, amount: 0.3}}>
            <h3 className='about-tag'>About us</h3>

            <h1 className='about-title'>
                We help you Build a <br/>
                Stronger, Healthier, and <br/>
                Fitter you
            </h1>
            <p className='about-text'>
                Founded with a passion for fitness and community, our gym combines 
                state-of-the-<br/>art-facilities, expert trainers, and personalized programs
                to help you reach your full<br/> potential. Whether youre a beginner or an athelete, our goal is to make every workout<br/>
                enjoyable, safe, and effective.
            </p>
            <motion.button className='explore-btn'
            whileHover={{scale: 1.06, y: -4}}
            whileTap={{ scale: 0.95}}
            transition={{duration: 0.2}}>EXPLORE OUR CLASSES</motion.button>


        </motion.div>
        

        <motion.div className='about-middle'
        variants={slideUp}
        initial= "hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3}}>
            <motion.img src= "/images/pexels-carlos-mario-311045289-13616290.jpg"  className='about-img-tall' alt=''
            whileHover={{scale: 1.04}} 
            transition={{duration: 0.4}}/>
            <motion.div className='trainer-box'
            initial={{opacity:0, y:0 }}
            whileInView={{opacity:1, y: 0}}
            viewport={{once: false}}
            transition={{duration: 0.7, delay: 0.4}}>
                <h2>25 <span>+</span></h2>
                <p>Certified Trainers</p>
            </motion.div>

        </motion.div>

        <motion.div className='about-right'
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "0px 0px -50px 0px"}}>
            <motion.div className='member-box'
            initial={{opacity:0, y: 25}}
            whileInView={{opacity: 1, y:0}}
            viewport={{ once: false}}
            transition={{duration: 0.7, delay: 0.3}}>
                <h2>2300+</h2>
                <p>Active Member</p>
            </motion.div>
            <motion.img src="/images/shirtless-man-working-out-exercise-machine_839153-3654.jpg" className='about-img' alt='' 
            whileHover={{scale:1.04}}
            transition={{duration:0.4}}/>
            
        </motion.div>

        
    </div>
    <motion.div className='about-features'
    variants ={featureContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{once: false, amount: 0.15}}>
            <motion.div className='feature-box'
            variants={featureAnimation}
            whileHover={{y:-10, scale:1.03}}
            transition={{duration: 0.3}}>
               <i className='fa fa-heartbeat feature-icon'></i>
                <h3>Passion</h3>
                <p className='the-text'>
                     We breathe fitness- every<br/>
                     rep, every session, every sucess.
                </p>

            
            </motion.div>
            <motion.div className='feature-box'
            variants={featureAnimation}
            whileHover={{y:-10, scale: 1.03}}
            transition={{duration:0.3}}>
                
               <i className='fa fa-users feature-icon'></i>
                <h3>Community</h3>
                <p className='the-text'>
                    Togther we grow stronger,<br/>
                    Motivation thrives when shared.
                </p>

            </motion.div>

            <motion.div className='feature-box'
            variants={featureAnimation}
            whileHover={{y:-10,scale: 1.03}}
            transition={{duration:0.3}}>
                <i className='fa fa-dumbbell feature-icon'></i>
                <h3> Discipline</h3>
                <p className='the-text'>
                    Consistency is the key we push our<br/>
                    Memebers to stay committed
                </p>
            </motion.div>

            <motion.div className='feature-box'
            variants={featureAnimation}
            whileHover={{y:-10, scale: 1.03}}
            transition={{duration: 0.3}}>
                <i className='fa fa-star feature-icon'></i>
                <h3>Excellecnce </h3>
                <p className='the-text'>
                    We strive for the highest quality<br/>
                    in service and results.
                </p>
            </motion.div>
           
         
        </motion.div>
    
    
    
    
    
    </>

    

  )
}
