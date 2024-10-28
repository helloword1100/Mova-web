'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import signinbg from '../../../assets/signin-bg.png'
import Callicon from '../../../assets/call-icon.svg'
import Keyicon from '../../../assets/key.svg'
import Button from '../../../components/button/page'

export default function signin() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Image and overlay text */}
      <div className="relative w-full md:w-1/2 bg-gray-900 h-1/2 md:h-full">
        <Image
          src={signinbg}
          alt="Calculator app on smartphone"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-opacity-50 px-6 pb-6 pt-4 md:px-11 md:pb-10 md:pt-7 flex flex-col justify-between">
          <div className="text-white text-xl md:text-3xl font-bold">MOWA</div>
          <div className="text-white w-full md:w-[502px]">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Lorem ipsum dolor sit amet, consectetur.</h1>
            <p className="text-base md:text-lg">
              Praesent gravida tincidunt blandit. Ut porta aliquet nulla. Nullam vel metus semper, ullamcorper ipsum sed, lacinia
              mauris. Suspendisse potenti.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-10 text-center">Welcome Back</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <span className="flex items-center gap-2 border border-color-input rounded-md px-3 py-2 md:px-4 md:py-3 w-full">
                <Callicon />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full focus:outline-none focus:ring-0 border-0 text-gray-400"
                  placeholder="Enter Your Number"
                />
              </span>
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <span className="flex items-center gap-2 border border-color-input rounded-md px-3 py-2 md:px-4 md:py-3 w-full">
                <Keyicon />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full focus:outline-none focus:ring-0 border-0 placeholder-gray-400 text-gray-400"
                  placeholder="Enter your Password"
                />
              </span>
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-gray-400">Forgot Password?</a>
            </div>
            <Button value="sign in" classname="py-3 px-3 w-full" />
          </form>
        </div>
      </div>
    </div>
  )
}
