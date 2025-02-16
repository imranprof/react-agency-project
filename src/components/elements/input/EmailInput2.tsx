
'use client'
import { useState } from "react"
import Image from "next/image"

const EmailInput2 = () => {

  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log('Email submitted:', email)
    setEmail('')
  }
  return (

    <div className=" sm:pt-[6px] sm:pb-[19px] sm:ps-12 lg:pb-[9px] lg:pt-4 lg:ps-[108px] sm:border-s sm:border-[#ffffff14]">
      <form onSubmit={handleSubmit} className="subscribe_form">
        <div className=" flex gap-[10px] border-b border-white pb-[25px]">
          <input
            type="email"
            className="text-[24px] bg-transparent text-white  focus:outline-none font-light w-full border-0"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="subscribe_btn">
            <Image src="/assets/imgs/icon/arrow-light.webp"
              alt="icon" width={62} height={42} /></button>
        </div>
      </form>
    </div>
  )
}

export default EmailInput2