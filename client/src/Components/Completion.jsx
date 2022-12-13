import React,{useState,useEffect}from 'react'
import '../styles/Completion.css'
import paymentComplete from './../paymentComplete.png'
function Completion() {
    
    //After completion of payment just return to homepage
    const ReturnToHome=()=>{
        window.location.reload()
    }
    return (
        <div className="completionContainer">
            <img src={paymentComplete}/>
            {/* <a target="_blank" href="https://icons8.com/icon/HnXRT7E5UtPf/verified-badge">Verified Badge</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            <h>Payment Complete</h>
            con
            <div className="details">
              <h>Name :{String(localStorage.getItem("name"))} </h>
              <h>Age : {String(localStorage.getItem("age"))} years </h>
              <h>Start Date : {String(localStorage.getItem("startDate"))} </h>
              <h>Batch : {String(localStorage.getItem("batchNumber"))} </h>
              <h>Fees Paid : 500 Rs. </h>
              
            </div>
            <button type="button"
             onClick={ReturnToHome}
            >
            Return to home <i class="fas fa-home"></i></button>
            <h1>check your email to get details</h1>
        </div>
    )
}

export default Completion
