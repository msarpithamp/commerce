import React from 'react';
import image from './ecommerce.jpg';
function Home() {
  return (
    <div style={{display:'flex'}}>
      <div style={{width:'50%'}}>
        <br></br><br></br>
        <center>
      <h1>WELCOME</h1>
      <h2>to this page</h2>
</center>
    </div>
    <div style={{width:'50%'}}>
      <img src={image} style={{height:'100%',width:'100%'}}></img>
    </div>
    </div>
  );
}

export default Home;