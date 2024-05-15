"use client"

import React, { useState } from 'react'
import RestaurentLogin from '../_components/restaurentLogin'
import RestaurentSignUp from '../_components/restaurentSignUp'
import RestaurentHeader from '../_components/restaurentHeader'
import './style.css'
import RestaurentFooter from '../_components/RestaurentFooter'

const Restaurent = () => {
    const [login, setLogin] = useState()
  return (
    <>
    <div className='container'>
        <RestaurentHeader />    <h1>Restaurent Login/Signup Page</h1>
    {
        login ? <RestaurentLogin /> : <RestaurentSignUp />
    }
    <div>
    <button onClick={(() => setLogin(!login))} className='button-link'>
        {login ? "Do not have a account? SignUp":"Already have a account ? Login"}
    </button>
    </div>
    </div>
    <RestaurentFooter />
    </>
  )
}

export default Restaurent
