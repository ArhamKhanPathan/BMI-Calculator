"use client"
// import { Result } from 'postcss'
import React, { useState } from 'react'

const page = () => {
  const [height, setheight] = useState()
  const [weight, setweight] = useState()
  const [calc, setCalc] = useState('Give Input First')
  const [act, setAct] = useState("")
  const calculate=(e)=>{
    e.preventDefault()
    const heightMeter = height*0.3048
    const res = parseFloat(weight)/(parseFloat(heightMeter)*parseFloat(heightMeter))
    setCalc(res.toFixed(2))

    if (res < 18.4) {
      setAct("Underweight")
    }
    if (res >= 18.5 && res <= 24.9) {
      setAct("Normal")
    }
    if (res >= 25 && res <= 39.9) {
      setAct("Overweight")
    }
    if(res > 40){
      setAct("obese")
    }
  }
  return (
    <>
<div className='text-center p-8'>
  <div className='bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg rounded-lg p-8 mb-8 w-96 mx-auto'>
    <h1 className='text-3xl font-semibold mb-4'>BMI CALCULATOR</h1>
    
    <form className="flex flex-col items-center" 
    onSubmit={calculate}>

      <div className='w-full p-4 text-center'>
        <label htmlFor="height" className='text-gray-300 mb-2'>Height</label>
        <input
          id="height"
          className='w-full my-2 p-3 border border-gray-500 bg-gray-700 rounded focus:outline-none focus:ring focus:border-blue-500 transition-all'
          type='text'
          placeholder='Your height (foot)'
          value={height}
          onChange={e=>{
            setheight(e.target.value)
          }}
        />
      </div>

      <div className='w-full p-4 text-center'>
        <label htmlFor="weight" className='text-gray-300 mb-2'>Weight</label>
        <input
          id="weight"
          className='w-full my-2 p-3 border border-gray-500 bg-gray-700 rounded focus:outline-none focus:ring focus:border-blue-500 transition-all'
          type='text'
          placeholder='Your weight (kg)'
          value={weight}
          onChange={e=>{
            setweight(e.target.value)
          }}
        />
      </div>

      <div className='w-full text-center'>
        <button className='bg-green-500 p-3 rounded text-white hover:bg-green-600 focus:outline-none focus:ring focus:border-green-400 transition-all'>
          Calculate
        </button>
      </div>
    </form>
  </div>

{/* Output Section */}
<div className='text-center'>
  <div className={`bg-gradient-to-r 
    ${calc < 18.4 ? 'from-amber-600 to-red-500' : (calc >= 18.5 && calc <= 24.9 ? 'from-green-400 to-green-600' : (calc >= 25 && calc <= 39.9 ? 'from-amber-400 to-red-500' :(calc > 40 ?'from-red-400 to-red-800': 'from-gray-800 to-gray-900')))}
    text-white shadow-md rounded-lg p-8 mb-8 w-96 mx-auto`}>

    <h2 className='text-xl font-semibold mb-4'>BMI Result</h2>
    
    <div className={`p-3 border border-gray-300 rounded
      ${calc < 18.4 ? 'bg-amber-600' : (calc >= 18.5 && calc <= 24.9 ? 'bg-green-600' : (calc <= 25 && calc >= 39.9 ? 'bg-amber-600' : (calc > 40 ? 'bg-red-700' : 'bg-gray-100')))}
    `}>
      <p className='text-gray-800 text-xl'>{calc}</p>
    </div>

    <p className='mt-4 text-gray-800 text-xl'>{act}</p>
  </div>
</div>

</div>
    </>
  )
}

export default page
