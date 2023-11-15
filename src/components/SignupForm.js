import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
function SignupForm({setLogged}) {
  const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",createPass:"",confirmPass:""})
  const[showPassword,setShowPassword]=useState(false);
  const[showPassword2,setShowPassword2]=useState(false);
  const[accountType,setAccountType]=useState("student");
  const navigate= useNavigate();
  function changeHandler(event){
    setFormData( prevData=>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ))
  }
  function submitHandler(event){
    event.preventDefault(); 
    if(formData.createPass!= formData.confirmPass){
        toast.error("Passwords do not match");
        return;
    }
    setLogged(true);
    toast.success("Account Created");
    navigate("/dashboard");
  }
  return (
    <div>
    <div
    className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'
    >
        <button 
        className={`${accountType === "student"
        ?
        "bg-richblack-900 text-richblack-5"
        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("student")}>
            Student
        </button>
        <button 
        className={`${accountType === "instructor"
        ?
        "bg-richblack-900 text-richblack-5"
        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("instructor")}>
            Instructor
        </button>
    </div>
    <form onSubmit={submitHandler}>
    <div className='flex gap-x-5 mt-[20px]'>
    <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                First Name<sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={changeHandler}
            placeholder='Enter First Name'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Last Name<sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={changeHandler}
            placeholder='Enter Last Name'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
    </div>
    <div className='mt-[20px]'>
        <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
        <input 
            required 
            type='email' 
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id'
            name='email'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
        </label>
    </div>
        <div className='flex gap-x-5 mt-[20px]'>
        <label className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Create Password<sup className='text-pink-200'>*</sup>
            </p>
        <input 
            required 
            type={showPassword ? ("text") : ("password")} 
            value={formData.createPass}
            onChange={changeHandler}
            placeholder='Create password'  
            name='createPass'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
        <span
         className='absolute right-3 top-[38px] cursor-pointer'
         onClick={()=>setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
            }
        </span>
        </label>
        
        <label className='relative w-full '>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Confirm Password<sup className='text-pink-200'>*</sup>
            </p>
        <input 
            required 
            type={showPassword2 ? ("text") : ("password")} 
            value={formData.confirmPass}
            onChange={changeHandler}
            placeholder='Confirm password'  
            name='confirmPass'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
        <span 
        className='absolute right-3 top-[38px] cursor-pointer'
        onClick={()=>setShowPassword2((prev)=>!prev)}>
            {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
            }
        </span>
        </label>
        </div>
        <button
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 w-full px-[12px] py-[8px] mt-8'
        >Create Account</button>
    </form>
    </div>
  )
}

export default SignupForm