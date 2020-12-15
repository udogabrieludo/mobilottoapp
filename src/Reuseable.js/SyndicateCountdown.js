import React,{ useState, useEffect} from 'react'

const SyndicateCountdown = ({className}) => {
    const [countdownDate, setCountdownDate] = useState(new Date('12/27/2020').getTime());

    //  const [countdownDate, setCountdownDate] = useState(new Date().setHours(60));
    const [state, setState] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    useEffect(() => {
      setInterval(() => setNewTime(), 1000);
    // const tick = setInterval(() => setNewTime(), 1000);
     //return () => clearInterval(tick) 
    }, []);
  
    const setNewTime = () => {
      if (countdownDate) {
        const currentTime = new Date().getTime();
  
        const distanceToDate = countdownDate - currentTime;
  
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
  
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }
  
        setState({ days: days, hours: hours, minutes, seconds });
      }
    };
  
    return (
      <div>
      
       
        <div className={className}>
         <div className='time-section'>
            <div className='timex'>{state.days || '0'}days</div>
           
          </div> 
          <div className='time-section'>
            <div className='timex'>:</div>
          </div>
          <div className='time-section'>
            <div className='timex'>{state.hours || '00'}</div>
            
          </div>
          <div className='time-section'>
            <div className='timex'>:</div>
          </div>
          <div className='time-section'>
            <div className='timex'>{state.minutes || '00'}</div>
           
          </div>
          <div className='time-section'>
            <div className='timex'>:</div>
          </div>
          <div className='time-section'>
            <div className='timex' style={{width:"10px"}}>{state.seconds || '00'}</div>
            
          </div>
        </div>
      </div>
    );
}

export default SyndicateCountdown
