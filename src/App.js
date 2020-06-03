import React, {useState} from 'react';
import logo from './logo.svg';

import Icon from "./components/Icon.js"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card,CardBody,Container,Button,Col,Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const itemArray = new Array(9).fill("empty")

const App = () => {
  const [isCross,setIscross] = useState(false);
  const [winmessage,setWinmessage] = useState("");
  
  const ReloadGame = () =>{
    setIscross(false)
    setWinmessage("")
    itemArray.fill("empty",0,9)
  }

  const Checkiswinner = () =>{
    if (itemArray[0] === itemArray[1] && 
      itemArray[0] === itemArray[2] && 
      itemArray[0]!== "empty") {
      setWinmessage(itemArray[0] + ' wins')
    }else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ){
      setWinmessage(itemArray[3] + " won")
    }else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ){
      setWinmessage(itemArray[6] + " won")
    }else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6]
    ){
      setWinmessage(itemArray[0] + " won")
    }else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ){
      setWinmessage(itemArray[1] + " won")
    }else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ){
      setWinmessage(itemArray[2] + " won")
    }else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8]
    ){
      setWinmessage(itemArray[0] + " won")
    }else if(
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6]
    ){
      setWinmessage(itemArray[2] + " won")
    }
  }

  const changeItem = itemNumber =>{
    if (winmessage){
      return toast(winmessage,{type:"success"})
    }
    if (itemArray[itemNumber]==="empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIscross(!isCross)
    }else{
      return(toast("already filled",{type:"error"}))
    }
    Checkiswinner()
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"></ToastContainer>
      <Row>
        <Col md="6" className="offset-md-3">
          {winmessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winmessage}
              </h1>
              <button color="success" block onClick={ReloadGame}>Reload the game</button>
            </div>
          ): (
            <h1 className="text-center text-warning" >
              {isCross ? "cross": "circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item,index)=>(
              <Card color="warning" onClick={()=>changeItem(index)} >
                <CardBody className="box">
                  <Icon name={item}></Icon>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
  
}

export default App;
