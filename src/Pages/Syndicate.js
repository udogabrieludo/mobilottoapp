import React,{useState} from "react";
import Header from "../Menu.js/Header";
import Footer from '../Menu.js/Footer'
import Accordion from "../Reuseable.js/Accordion";
import {accordionContents} from './ListContent'
import { Modal } from "../Reuseable.js/Modal";
import * as Icon from 'react-feather';


const Syndicate = () => {

  const[showModal, setShowModal] = useState(false)

  const displayPopup = ()=>(
      setShowModal(prev =>!prev)
  )


  return (
    <div>
      <Header />
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ paddingTop: "10rem" }}
      >
        <div className="row">
          <div className="col-12">
            <h4>SYNDICATE</h4>
            <img
              src="/images/syndicate1.svg"
              className="img-fluid"
              width="100%" alt=""
            />
          </div>
          <div className="col-12 pt-3">
            <h4>MORE PLAYERS, MORE CHANCES, MORE SPECIAL MOMENTS</h4>
            <p>
              Playing National Lottery games with a syndicate is a great way to
              share the thrill of playing the nation’s favourite games. There’s
              something very special about celebrating a win with friends,
              family or work colleagues.
            </p>
          </div>
        </div>
      </div>

      <div className="container pl-0">
        <div className="col-md-12 ">
          <ul className="pl-0">
            <li>
             <Icon.CheckSquare size={18} color="red" /> Setting up a
              syndicate is easy peasy
            </li>
            <li>
            <Icon.CheckSquare size={18} color="red" /> Build your
              dream team
            </li>
            <li>
            <Icon.CheckSquare size={18} color="red" /> Agree how the
              syndicate will work
            </li>
            <li>
            <Icon.CheckSquare size={18} color="red" /> Start playing
            </li>
            <li>
            <Icon.CheckSquare size={18} color="red" /> Share the
              winnings
            </li>
          </ul>
        </div>
      </div>
      
        <div className="syndicate-section">
          <div className="container  d-flex align-items-center justify-content-between text-white h-100" style={{fontFamily:"cunia"}}>
            <div className="text-uppercase" ><h6>start / join the syndicate and stand a greater chance</h6></div>
            <div className="">
              <button type="button" onClick={displayPopup} className="btn btn-light text-uppercase text-danger">
              <strong> Play Syndicate</strong>
              </button>
            </div>
          </div>
        </div>
        
      
      <div className="container">
        <div className="jumbotron">
          <div className="container">
            <h4>BUILD YOUR DREAM TEAM</h4>
            <p>
              Playing as a group can be a lot more fun than playing alone and
              celebrating a win with others can be so much more rewarding –
              especially when it’s a big jackpot! But first things first – get
              some friends, family or work colleagues together and get the ball
              rolling. Top tips for building your team Recruit your dream team –
              syndicates can be made up of friends, family or even work
              colleagues. In fact, two thirds of current syndicates are work
              based*, with syndicate managers starting them up to inject some
              fun and social interaction into the workplace. Agree how it will
              work – there are no set ways of how to play within a syndicate but
              agreeing guidelines upfront will provide peace of mind for your
              team. Stay connected – social media is a great way to keep in
              touch with your team in between draws. You can send your syndicate
              team payment reminders, confirmation of draw entries and of course
              those exciting win alerts! *Syndicates research 2017.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        { accordionContents && accordionContents.map((acc, i)=>(
             <Accordion key={i} title={acc.title} className="col-md-8 pl-0" bodyContent={acc.content}/>
        ))}
            
            
        </div>
   
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Footer className="footer-white footer-top" />
    </div>
  );
};

export default Syndicate;
