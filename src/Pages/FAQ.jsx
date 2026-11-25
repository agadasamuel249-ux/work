import React,{useState} from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
export default function FAQ() {
    const[activeCategory, setActiveCategory] =useState("membership");
    const [openQuestion, setOpenQuestion] =useState(null);

    const categories ={
        membership:{
            title: "Membership & Plans",
            questions:[
                {
                  q: "What services do you offer?",
                   a: "We offer a full gym, classes, personal training, and wellness programs."

                },
                {
                   q: "How can I join the gym?",
                   a: "You can register online or visit the front desk to sign up."  
                },
                {
                   q: "Do you offer trial memberships?",
                   a: "Yes, we have day and week passes for new members."

                },
                {
                    q: "Can I change my membership plan?",
                    a: "You can upgrade or downgrade your plan anytime."  
                },
                {
                     q: "Are there discounts available?",
                     a: "We offer student, couple, and seasonal discounts."

                }



            ],
        },
        training: {
            title: "Training & Facilities",
            questions:[
                {
                    q: "What kind of equipment do you have?",
                    a: "We have cardio, strength, and functional equipment."


                },
                {
                     q: "Do you offer personal training?",
                     a: "Yes, certified trainers are available for 1-on-1 sessions."

                },
                {
                    q: "What classes are included with membership?",
                    a: "Most group classes such as yoga and HIIT are included."


                },

                {
                    q: "Do you have locker rooms and showers?",
                    a: "Yes, locker rooms and showers are available." 
                },

                {
                     q: "Are group classes beginner-friendly?",
                     a: "Yes, classes are suitable for beginners." 

                },
            ],

           
        },

         billing:{
                title: "Billing & Policies",
                questions:[
                    {
                         q: "Can I get an invoice or receipt?", 
                         a:"Yes, invoices and receipts are generated automatically."

                    },
                    {
                        q: "What is your cancellation policy?",
                        a: "Cancel anytime with a 30-day notice." 

                    },
                    {
                        q: "Are there any additional fees?",
                        a: "No hidden fees — only optional add-ons."

                    },
                    {
                        q: "How do I update my billing information?",
                        a: "You can update it via your account or at the desk."

                    }

                ],
            },


    };
    const current = categories[activeCategory];
  return (
    <>
    <section className='faq-hero'>
        <div className='faq-hero-overlay'></div>
        <div className='faq-hero-text'>
            <p className='faq-first-text'>FAQ</p>
            <p className='faq-second-text'> 
                <Link to= "/"> Home</Link>
                <span> /FAQ</span>
            </p>
        </div>

    </section>

    <div className='faq-container'>

        <div className='faq-categories'>
            <button 
            className={activeCategory === "membership" ? "active" : ""}
            onClick={() => setActiveCategory("membership")} 
            >
                Memebership & Plans                 
            </button>

            <button className={activeCategory === "training" ? "active" : ""}
            onClick={() => setActiveCategory("training")}>
                Training & Facilities

            </button>
            <button className={activeCategory === "billing" ? "active" : ""}
            onClick={()=> setActiveCategory ("billing")}>
                Billing & Policies
            </button>
        </div>

        <div className='faq-list'>
          {current.questions.map((item, index) => (
            <div 
            key={index} 
            className='faq-item'
            onClick={()=> setOpenQuestion(openQuestion === index ? null : index)}>
                <div className='faq-question'>
                    {item.q}
                    <span className='faq-arrow'>{openQuestion === index ? "^" : "⌄"}</span>

                </div>
                { openQuestion === index &&(
                    <div className='faq-answer'>{item.a}</div>
                )}
            </div>
          ))}  
        </div>
    </div>
    
    
    </>
  )
}
