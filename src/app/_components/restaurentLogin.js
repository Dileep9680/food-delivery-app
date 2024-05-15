import React from 'react'

const RestaurentLogin = () => {
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
        <button className='button'>Login</button>
      </div>
    </div>
    </>
  )
}

export default RestaurentLogin
