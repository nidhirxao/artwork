import React from 'react'

function Purchase() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h3 style={{color:'white'}}>Purchase SuccessFull</h3>
        <a style={{color:'white'}} href='/products'>Continue shopping?</a>
    </div>
  )
}

//mysql://b021387c5e5af6:a85c63c1@us-cdbr-east-05.cleardb.net/heroku_44a14e02619144e?reconnect=true

export default Purchase