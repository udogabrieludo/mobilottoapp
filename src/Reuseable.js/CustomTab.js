import React, { useState } from "react";
import { Tabs, Tab, Content } from "./Tab";
import './Jackpot.css'

const CustomTab = () => {
    const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
      console.log(index)
    }
  };

 
  const className =  props => (props.active ? "is-active" : "not-active");
     

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
{/* 
      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Content1
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Content2
        </Tab>
        <Tab onClick={handleClick} active={active === 2} id={2}>
          Content3
        </Tab>
      </Tabs> */}
      <>


    
      

       <div onClick={handleClick} active={active ? 0 : 0} className={`${className}`} id={0}>1</div>
       
        <div onClick={handleClick} active={active ? 1 : 0}  className={`${className}`} id={1}>2</div>
         <div onClick={handleClick} active={active ? 2 : 0}  className={`${className}`}  id={2}>3</div>
         <div onClick={handleClick} active={active ? 3 : 0}  className={`${className}`} id={3}>4</div>

        <Content active={active === 0}>
          <h1>Content 1</h1>
        </Content>
        <Content active={active === 1}>
          <h1>Content 2</h1>
        </Content>
        <Content active={active === 2}>
          <h1>Content 3</h1>
        </Content>
        <Content active={active === 3}>
          <h1>Content 4</h1>
        </Content>
      </>
 
    
       
      {/* <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs> */}
    </div>
  );
}

export default CustomTab
