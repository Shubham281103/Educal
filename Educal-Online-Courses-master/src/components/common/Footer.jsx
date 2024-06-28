import React from "react"
import logImg from "../assets/images/logo-black.png"
import { BsApple, BsGooglePlay } from "react-icons/bs"
import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <>
      <section className='app w-4/5 m-auto rounded-lg shadow-shadow2 text-white flex md:flex-col bg-primary mt-16 relative z-10'>
        
        
      </section>
      <footer className='bg-[#F3F4F8] py-10 pt-32 -mt-24'>
        <div className='container grid grid-cols-4 gap-5 md:grid-cols-2'>
          <div className='logo'>
            <img src={logImg} alt='logImg' className='h-5' />
            <span className='text-[14px]'>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</span>
          </div>

          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Company</h4>
            <NavLink to='#' className=' text-[14px] block mb-2 '>
              Contact
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Portfolio
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Blog
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Our team
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Blog
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Get in Touch
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              FAQ
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Latest news
            </NavLink>
          </li>
          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Platform</h4>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Shop
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Pricing
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Blog
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Landing
            </NavLink>
          </li>
          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Subscribe</h4>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              About us
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Contact
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Reviews
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Services
            </NavLink>
          </li>
        </div>
      </footer>
    </>
  )
}
