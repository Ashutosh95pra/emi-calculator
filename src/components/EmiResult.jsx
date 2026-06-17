import React from 'react';

 function EmiResult({data}) {
    if (!data) return null;
    return (
        <>
        <div className='result  d-flex flex-column justify-content-center align-items-center'>
            <h3 className='result-text'>Your result </h3>
            <div className='emi box'>
                <p>MONTHLY EMI</p>
                <h4>₹ {data.emi}</h4>
            </div>
            <div className='interest box'>
                <p>TOTAL INTEREST</p>
                <h4>₹ {data.totalInterest}</h4>
                <p>over loan tenure</p>
            </div>
            <div className='totalPayment box'>
                <p>TOTAL PAYMENT</p>
                <h4>₹ {data.totalPayment} </h4>
            </div>
        </div>
        </>
    );
 }
 
 export default EmiResult;