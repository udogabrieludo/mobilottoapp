import React,{useState} from 'react';
import '../Reuseable.js/Jackpot.css'
import Header from '../Menu.js/Header'
import Footer from '../Menu.js/Footer'
import Countdown from './Countdown'
import { Content } from "../Reuseable.js/Tab"
import Resultlist from '../Reuseable.js/Resultslist'
import Howtoplay from '../Reuseable.js/Howtoplay';
import * as Icon from "react-feather";


const Jackpot = () =>{

    const [active, setActive] = useState(0);
    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };
    const resultSection = () => (
        <div className=" wrapper mt-5">
          <section className="d-flex align-items-center resultbg justify-content-md-center">
            <div
              className="container text-center text-white"
              data-aos="zoom-out"
              data-aos-delay={100}
            >
              <h2>RESULTS</h2>
            </div>
          </section>
        </div>
      );
    


    const heroBanner = () => (
        <div className=" wrapper">
          <section className="d-flex align-items-center jackpot justify-content-md-center">
            <div className="container ">
              
            </div>
          </section>
        </div>
      );


     const howToPlay = ()=>(
         <Content active={active ===2}>
            <div className="container ">
            <Howtoplay />
            </div>
         </Content>
     ) 

      const main =()=>(
       
           <Content active={active === 1}>
           {resultSection()} 
           <div className="container">  
         <Resultlist showFirst={true} ShowSecond={false} className="col-md-12"  /> 
         </div>
        </Content>
       
      )

   const heroContent =()=>(
    <div className="container mt-3">
    <div className="row" style={{marginTop:"-24rem"}}> 
    <div className="col-md-4 text-center text-white jackpot-header">
    <small>Next Draw Date , Fri, Dec 24 Jackpot</small>
        <h2><strong>SUPER MILLION</strong></h2>
        <small><strong>Estimate Jackpot</strong></small>
       <h1>N3M</h1>
       <small className="text-success">Draw Count Down</small>
       <Countdown  className="countdown-wrapper white-text"/>
    </div>
    <div className="col-md-8" >
   <div className="d-md-flex mb-1 justify-content-end ">
       
  <ul className="nav nav-tabs tab-list pb-2">
    <li className="nav-item">
      <a className="nav-link active" onClick={handleClick} className={active === 0 ? 'is-active': 'not-active'}  id={0}>PLAY SUPERMILLION</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" onClick={handleClick} className={active === 1 ? 'is-active': 'not-active'} id={1}>RESULTS</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" onClick={handleClick} className={active === 2 ? 'is-active': 'not-active'} id={2}>HOW TO PLAY</a>
    </li>
  </ul>
 
   </div>
 
    <div className="tab-content" style={{background:"#fff", boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
    <Content active={active === 0}>
    <div  className="container px-4 pb-5 "><br />
     <div className="d-md-flex justify-content-between">
         <div>
         <p  className="text-uppercase mb-0"><strong>enter your lotto numbers</strong></p>
          <div><small>Play Super Million by selecting six numbers from 1- 50 for a chance to win every night.</small></div>
         </div>
         <div>
         <p  className=" mb-0"><strong>N100</strong> Per Play</p>
         <p  className=" mb-0"><strong>1 IN 2.2</strong> Odds</p>
         </div>
     </div><br></br>
    <div className="d-flex align-content-center ">
        <div className="pr-3">
            <div><small className="pr-2"><strong>Random Pick</strong></small>  <Icon.Shuffle color="#000" size={20} /></div>
        </div>
    <div className="pr-4 result-check">
        <ul className="list-inline">         
            <li className="list-inline-item fill-color-outline">1</li>
            <li className="list-inline-item fill-color-outline">4</li>
            <li className="list-inline-item fill-color-outline">5</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">2</li>
            <li className="list-inline-item fill-color-outline">9</li>     
        </ul> 
      </div>
      <div>
          <Icon.Trash2 color="#C70C0C" size={20} />
          </div>
         </div>
         
         <br></br>
         <div className="d-flex align-content-center ">
        <div className="pr-3">
            <div><small className="pr-2"><strong>Random Pick</strong></small>  <Icon.Shuffle color="#000" size={20} /></div>
        </div>
    <div className="pr-4 result-check">
        <ul className="list-inline">         
            <li className="list-inline-item fill-color-outline">1</li>
            <li className="list-inline-item fill-color-outline">4</li>
            <li className="list-inline-item fill-color-outline">5</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">2</li>
            <li className="list-inline-item fill-color-outline">9</li>     
        </ul> 
      </div>
      <div>
          <Icon.Trash2 color="#C70C0C" size={20} />
          </div>
         </div><br></br>
         <div className="d-flex align-content-center ">
        <div className="pr-3">
            <div><small className="pr-2"><strong>Random Pick</strong></small>  <Icon.Shuffle color="#000" size={20} /></div>
        </div>
    <div className="pr-4 result-check">
        <ul className="list-inline">         
            <li className="list-inline-item fill-color-outline">1</li>
            <li className="list-inline-item fill-color-outline">4</li>
            <li className="list-inline-item fill-color-outline">5</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">2</li>
            <li className="list-inline-item fill-color-outline">9</li>     
        </ul> 
      </div>
      <div>
          <Icon.Trash2 color="#C70C0C" size={20} />
          </div>
         </div> <br></br>
        <div className="pt-4 d-md-flex align-content-center justify-content-between">
        {/* Checkboxes */}
        <div>
            <h6><small><strong>Which days?</strong></small></h6>
            <div className="form-check form-check-inline pr-4">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue={1} />
                <label className="form-check-label "><small>Mon</small></label>
            </div>
            <div className="form-check form-check-inline pr-4">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue={2} />
                <label className="form-check-label"><small>Tue</small></label>
            </div>
            <div className="form-check form-check-inline ">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue={3} />
                <label className="form-check-label"><small>Wed</small></label>
            </div><br></br>
            <div className="form-check form-check-inline pr-4">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue={3} />
                <label className="form-check-label"><small>Thur</small></label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue={3} />
                <label className="form-check-label"><small>Fri</small></label>
            </div>
        </div>
        <div>
            <h6><small><strong>For how many weeks?</strong></small></h6>
                <div>
                <div className="form-check form-check-inline pr-4">
                 <div>
                <input type="radio" name="radio" id="radio1" />
                <label htmlFor="radio1">1</label>
                </div>

                </div>
                <div className="form-check form-check-inline">
                <div>
                <input type="radio" name="radio" id="radio2" />
                <label htmlFor="radio2">2</label>
                </div>

                </div><br></br>
                <div className="form-check form-check-inline pr-3">
                <div>
                <input type="radio" name="radio" id="radio3" />
                <label htmlFor="radio3">3</label>
                </div>

                </div>
                <div className="form-check form-check-inline">
               <div>
                <input type="radio" name="radio" id="radio4" />
                <label htmlFor="radio4">4</label>
                </div>

                </div>
             </div>

           
        </div>
        <div className="text-right">
        <h6><small className="">Total:</small></h6>
        <h6>N4,000</h6>
        <button className="btn btn-danger syndicate-btn" >PLAY</button>
        </div>
        </div>
    </div>
    </Content>
   
    <Content active={active === 1}>
    <div className="container px-4 "><br />
    <h6><strong className="text-uppercase">enter your lotto numbers</strong></h6>
    <div className="d-flex">
    <div className="pr-4 result-check">
        <ul className="list-inline">         
            <li className="list-inline-item fill-color-outline">1</li>
            <li className="list-inline-item fill-color-outline">4</li>
            <li className="list-inline-item fill-color-outline">5</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">2</li>
            <li className="list-inline-item fill-color-outline">9</li>     
        </ul> 
      </div>
      <div>
          <Icon.Trash2 color="#C70C0C" size={20} /></div>
         </div>
        <div className="pt-4 d-flex align-content-center justify-content-between">
        {/* Checkboxes */}
        <div>
        <h6><small><strong>Which days?</strong></small></h6>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue={1} />
            <label className="form-check-label "><small>Mon</small></label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue={2} />
            <label className="form-check-label"><small>Tue</small></label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue={3} />
            <label className="form-check-label"><small>Wed</small></label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue={3} />
            <label className="form-check-label"><small>Thur</small></label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue={3} />
            <label className="form-check-label"><small>Fri</small></label>
        </div>
        </div>
        <div>
        <button className="btn btn-danger syndicate-btn" >CHECK</button>
        </div>
        </div>

    <div className="container">
    <div className="row py-5">
    
        <div className="col-md-5">
        <h6><small><strong>WINNING NUMBERS</strong></small></h6>
        <ul className="list-inline">         
            <li className="list-inline-item fill-color-outline">1</li>
            <li className="list-inline-item fill-color-outline">4</li>
            <li className="list-inline-item fill-color-outline">5</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">2</li>
            <li className="list-inline-item fill-color-outline">9</li>     
        </ul> 
        <br></br>
        <ul className="list-inline">         
            <li className="list-inline-item fill-color-outline">1</li>
            <li className="list-inline-item fill-color-outline">4</li>
            <li className="list-inline-item fill-color-outline">5</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">2</li>
            <li className="list-inline-item fill-color-outline">9</li>     
        </ul> 
        </div>
        <div className="col-md-5">
        <h6><small><strong>YOUR NUMBERS</strong></small></h6>
        <ul className="list-inline">         
            <li className="list-inline-item fill-color-outline">1</li>
            <li className="list-inline-item fill-color-outline">4</li>
            <li className="list-inline-item fill-color-outline">5</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">2</li>
            <li className="list-inline-item fill-color-outline">9</li>     
        </ul> <br></br>
        <ul className="list-inline">         
            <li className="list-inline-item fill-color-outline">1</li>
            <li className="list-inline-item fill-color-outline">4</li>
            <li className="list-inline-item fill-color-outline">5</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">3</li>
            <li className="list-inline-item fill-color-outline">2</li>
            <li className="list-inline-item fill-color-outline">9</li>     
        </ul> 
        </div>
        <div className="col-md-2">
        <h6><small><strong>WINNINGS</strong></small></h6>
         <div><p className="outline">N40,000</p>
         <p className="outline">N40,000</p>
         </div>
       
        </div>
    </div>
    </div>
    <div className="text-right pb-5">
    <h6><small className="pr-4"><strong>Total Winnings</strong></small> N40,000</h6>
    </div>
    </div>
    </Content>
    <Content active={active === 2}  >
    <div id="home" className="container px-4  pb-4" ><br />
    <h6><strong>HOW TO PLAY</strong></h6>
      <div>
          <p>
            Super Million Lotto is one of the leading lottery games in Africa, offering huge winnings to players who match six main numbers between 1 and 50.
            Enter six regular numbers between 1-50 now for a chance to win.
            The lottery game result is drawn every evening Monday to Saturday. 
          </p>
          <p className="pt-3">
          The player(s) with correct 6 numbers win and share the ‘winning’ while player(s) with 5 and 4 numbers win a percentage of the wager as well. Winners of 3, 4, 5 and 6 correct numbers are contacted and credited with their prize winnings. Winners of 3 numbers are credited with their original wager. If there is more than one winner in the 4/6, 5/6 or 6/6 prize categories, 
          the prize in that category will be shared among the winners in that category.

        If the prize is not won on that day, the entire amount of the winning rolls over to the next day.</p>
            <p className="pt-3">
            In the event of a Cancelled Draw or Draws for whatever reason, the Winning rolled over from a Draw preceding the Cancelled Draw, will be added to the Winning for the next Draw.

        The prize pool fund is based on a pari-mutuel share.
    </p>
          
      </div>
    </div>
    </Content>
  </div>
  </div>
  </div>
</div>
   )   
 
 

  return(

  <div>
 <Header />
  {heroBanner()}
  {heroContent()}
  {main()}
  {howToPlay()}
 

<Footer className="footer-white" />
  </div>


    )
}


export default Jackpot