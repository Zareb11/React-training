import React from 'react'
import bgImg from '../assests/img2.jpg'


export default function Form() {
  return (
    <section>
    <div className="register">
        <div className="col-1">
            <h2>Sign In</h2>
            <span>register and enjoy the service</span>

            <form id='form' className='flex flex-col' >
                <input type="text"  placeholder='username' />
                <input type="text"  placeholder='password' />
                <input type="text"  placeholder='confirm password' />
                <input type="text"  placeholder='mobile number' />
                <button className='btn'>Sign In</button>
            </form>

        </div>
        <div className="col-2">
            <img src={bgImg} alt="" />
        </div>
    </div>
</section>
  )
}
