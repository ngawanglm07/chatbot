import React from 'react';
import ChatBot from 'react-simple-chatbot';
import './App.css';
import {Segment} from 'semantic-ui-react';


function App() {

  const steps = [ 
    {
      id:'Greet',
      message:"Hello welcome to our chat app" ,
      trigger:"ask name"
    } , {
      id:'ask name',
      message:"please enter your name",
      trigger:"waiting"
    } ,{
      id:'waiting',
      user: true,
    trigger: 'Name'
    } , {
      id:'Name',
      message:'HI {previousValue} , please select your issue',
      trigger: 'issues'
    } , {
      id:'issues',
      options:[
        {
          value:'React',
          label:"React", 
          trigger:"React"
        },  {
          value:'Angular',
          label:"Angular", 
          trigger:"Angular"
        }
       
      ]
    }
    ,
    {
      id:'React',
      message:"thanks for letting us know your issue", 
      trigger:"email",
    } ,
    {
      id:'Angular',
      message:"thanks for letting us know your issue" ,
      trigger:'email',
    } ,
    {
      id:'email',
      message:'please enter your email now',
      trigger:'thanks',
    } , 
    {
      id:'thanks',
      user: true,
      trigger:'ben',

    } , {
      id:'ben',
      message:'thanks we will mail you shortly',
      end:true
    }
  ]


  return (
    <div className='floa'>
  <Segment >
<ChatBot steps={steps} className="chat"/>
  </Segment>
  <footer className='foot'> © Copyright Ngawang_lm 2023</footer>
    </div>

  );
}

export default App;
