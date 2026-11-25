// import React from 'react'
// import Services from './ClassSection'
import { Link } from 'react-router-dom'

export default function Classes() {
  return (
    <> 
    <section className='class-hero'>
      <div className='class-overlay'></div>
      <div className='class-hero-text'>
        <p className='class-head'>

           Classes

        </p>
        <p className='home-classes'>
          <Link to= "/">Home</Link> <span>/ classes</span>
        </p>
     </div>
      

    </section>
    <div className='section-wrapper'>
      <div className='section-row'>
        <div className='section-card left first'>
          <div className='section-text'>
            <h2>Strength & Conditioning</h2>
            <p>
              Build power, <br/>
              endurance, and a lean<br/>
              physique with a<br/>
              combination of <br/>
              barbell, dumbbell, and<br/>
              finctional training<br/>
              techniques
            </p>

            <span className='details'> VIEW DETAILS</span>
            
          </div>
          <img  src='/images/p1.webp' alt='strength' className='section-img'/>
        </div>
        <div className='section-card right first'>
          <img  src='/images/p2.webp' alt='Training' className='section-img'/>
          <div className='section-text'>
            <h2> Personal Training</h2>
            <p>
              One-on-one guidiance <br/>
              from Proffessional<br/>
              trainers to maximize<br/>
              your results safely and<br/>
              efficiently with tailored<br/>
              programs



            </p>
            <span className='details'> VIEW DETAILS</span>

          </div>
        </div>

      </div>
      


      <div className='section-row'>
        <div className='section-card left second'>
          <div className='section-text'>
            <h2>HIIT & Group Training</h2>
            <p>
              Join high-energy<br/>
               group workouts like<br/>
               HIIT, spinning, and <br/>
               bootcamps to burn calories,<br/> 
               build stamina, and <br/>
               stay motivated.
            </p>
            <span className='details'>VIEW DETAILS</span>

          </div>
          <img src='/images/p3.webp' alt='' className='section-img'/>
        

        </div>
        <div className='section-card right second'>
          <img src='/images/p4.webp' alt='' className='section-img'/>
          <div className='section-text'>
            <h2> Yoga & pilates </h2>
            <p>
              Improve flexibility,<br/>
               reduce stress, and<br/>
               enhance body control with<br/>
               calming yoga and pilates sessions led by<br/> 
               certified instructors.
            </p>
            <span className='details'> VIEW DETAILS</span>


          </div>

        </div>


      </div>
      
      <div className='section-row' >
        <div className='section-card left third'>
          <div className='section-text'>
            <h2> Circuit Training</h2>
            <p>
              Ignite your<br/>
               metabolism with intense<br/>
               circuit training that<br/>
               blends cardio and <br/>
               strength to deliver<br/>
               total-body results<br/>
               fast.
            </p>

            <span className='details'>VIEW DETAILS</span>
          </div>
          <img src='/images/p5.webp' alt='' className='section-img'/>
        </div>
        <div className='section-card right third'>
          <img src='/images/p6.webp' alt='' className='section-img' />

          <div className='section-text'>
            <h2> Atheletic Performance</h2>
            <p>
              Train like an athlete<br/>
              with explosive power <br/>
              drills, balance routines,<br/>
              and mobility work to <br/>
              boost speed and<br/> 
              agility.
            </p>
            <span className='details'>VIEW DETAILS</span>

          </div>

        </div>

      </div>









    </div>
    
    <section className="cta-contact">
    <h2>Ready to take the first step towards your fitness goals?</h2>
    <button className="cta-contact-btn start-slide">JOIN NOW</button>
  </section>


   
    
    
    
    </>
   
  )
}
