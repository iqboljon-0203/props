import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const students=[
    {id:1,name:"Ali",age:19},
    {id:2,name:"Salim",age:23},
    {id:3,name:"Ohunov",age:9},
    {id:4,name:"Aibaba",age:29},
    {id:5,name:"Aliyev",age:34},
    {id:6,name:"Karim",age:21},
    {id:7,name:"Vali",age:67},

]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {students.map((value)=>{
            return(
                <App data={value}>
                    <h3>I'm a student</h3>
                </App>
            )
        })}
    </>
    );

    



