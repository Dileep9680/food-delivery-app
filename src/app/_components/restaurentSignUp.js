import React from 'react'

const RestaurentSignUp = () => {
  return (
    <>
    <h3>Sign Up</h3>
    <div>
      <div className='input-wrapper'>
        <input type='text' placeholder='Enter email id' className='input-field'/>
      </div >
      <div className='input-wrapper'>
      <input type='password' placeholder='Password' className='input-field'/>
      </div>
      <div className='input-wrapper'>
      <input type='password' placeholder='Confirm password' className='input-field'/>
      </div>
      <div className='input-wrapper'>
      <input type='text' placeholder='Enter Restaurent Name' className='input-field'/>
      </div>
      <div className='input-wrapper'>
      <input type='text' placeholder='Enter City' className='input-field'/>
      </div>
      <div className='input-wrapper'>
      <input type='text' placeholder='Enter your address' className='input-field'/>
      </div>
      <div className='input-wrapper'>
      <input type='tel' placeholder='Enter Contact No.' className='input-field'/>
      </div>
      <div className='input-wrapper'>
        <button className='button'>Sign Up</button>
      </div>
    </div>
    
    </>
  )
}

export default RestaurentSignUp
