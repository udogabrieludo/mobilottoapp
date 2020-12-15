import React,{useState} from 'react'
import './Accordion.css'

const Accordion = ({title, bodyContent, className}) => {

    const caretDown = ()=>{
      return  <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
    }
    const caretUp = ()=>(
       <span> <i className="fa fa-caret-up" aria-hidden="true"></i></span>
    ) 
    
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={className}>
            <div className="accordion">
               <div className="accordion-header" onClick={()=>{
                      setIsOpen(!isOpen)
                  }}>
                  <h6 className="text-uppercase">{title}  {isOpen ? caretUp() : caretDown()}</h6>
               </div>
               <div className="accordion-body">
              {isOpen && (
                 
                 <p data-aos-easing="linear"  data-aos="fade-in"
                 data-aos-delay="100"> {bodyContent}</p>
               
              )}     
               
               </div>
            </div>
            
        </div>
    )
}

export default Accordion
