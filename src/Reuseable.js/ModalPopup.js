import React,{useState} from 'react'
import styled from 'styled-components'
import {Modal} from './Modal'



const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:100vh;
width:100%;

`;

const Button = styled.button`
width:200px;
font-size:24px;
background-color: red;
padding: 10px 5px;
cursor:pointer;
font-family:poppins;
color:#fff;

 
`;



const ModalPopup = () => {

    const[showModal, setShowModal] = useState(false)

    const displayPopup = ()=>(
        setShowModal(prev =>!prev)
    )


    return (
        <>
            <Container>
            <button className="btn btn-success" onClick={displayPopup}>Modal pop</button> 
            </Container>
             <Modal showModal={showModal} setShowModal={setShowModal} />
       
        </>
    )
}

export default ModalPopup
