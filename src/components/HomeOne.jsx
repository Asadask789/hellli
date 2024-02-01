
'use client'
import React, { useState } from 'react';
import Modal from './UnlockModal';
import home1 from '@/images/home1.png';
import cam from '@/images/camnyt.png';
import video from '@/images/video.png';
import lock from '@/images/lock.png';
import apple from '@/images/apple.png';
import google from '@/images/google.png';
import star from '@/images/star.png';
import setting from '@/images/setting.png';
import male from '@/images/male.png'
import maleIcon from '@/images/maleIcon.png';
import femaleIcon from '@/images/femaleIcon.png';
import coupleIcon from '@/images/coupleIcon.png';
import { Share2, AlignJustify, MoveRight } from 'lucide-react';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import InputEmoji from "react-input-emoji";
import 'tailwindcss/tailwind.css';
import leftGirlImage from '@/images/leftGirlImage.jpg'
import leftGirl2 from '@/images/leftImage2.jpg'
import googleIcon from '@/images/googleIcon.png'
import fbLogoIcon from '@/images/fbLogoIcon.png'
import Image from 'next/image';

// Define the HomeOne component
function HomeOne() {

    const [isChecked, setIsChecked] = useState(false);

    const toggleHandler = () => {
        setIsChecked(!isChecked);
    };

    const [text, setText] = useState("");
    const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);

    function handleOnEnter(text) {
        console.log("enter", text);
    }

    const openUnlockModal = () => {
        setIsUnlockModalOpen(true);
    };

    const closeUnlockModal = () => {
        setIsUnlockModalOpen(false);
    };

    const closeModalOnOutsideClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeUnlockModal();
        }
    };

    const [showEmailLoginFields, setShowEmailLoginFields] = useState(false);

    const openEmailLoginFields = () => {
        setShowEmailLoginFields(true);
    };



    return (
        <section className='flex max-w-screen-2xl mx-auto justify-center items-start w-full font-inter'>
            <div className='w-1/2 relative'>
                <Image src={home1} className='relative w-full 2xl:h-[70vh] max-h-[950px] lg:h-[85vh] h-[65vh]  flex justify-center items-center' width={1000} height={1000} alt='' />
                <div className='text-white absolute top-0 lg:left-14 pr-2 md:left-6 max-w-xl lg:h-[85vh] 2xl:h-[70vh] max-h-[950px] h-[65vh] flex justify-center flex-col gap-6 '>
                    <div className='flex justify-between'>
                        <Image src={cam} width={250} height={200} />
                        <Image src={star} width={50} height={10} />
                    </div>
                    <h4 className=' font-semibold lg:text-2xl text-1xl'>9,851,548 joined Camsurf</h4>
                    <div className='flex gap-2'>
                        <div className="relative">
                            <button
                                className="bg-pink px-7 flex items-center gap-1 text-white text-sm py-3 bg-gradient-to-b from-[#FF5887] to-[#FF0E52] rounded-3xl"
                            >
                                I am a male <Image src={maleIcon} alt="maleIcon" width={30} height={30} className="ml-2" />
                            </button>

                        </div>
                        <button className='px-20 py-3 bg-gradient-to-b flex text-white text-sm items-center gap-1 from-[#0197F5] to-[#62C2FF] rounded-3xl '>Start <Image src={video} width={10} height={10} /> </button>
                    </div>
                    <button
                        onClick={openUnlockModal}
                        className='px-3 max-w-[330px] py-3 bg-gradient-to-b flex text-white text-xs   items-center gap-1 from-[#525252] to-[#161616]  rounded-3xl text-center  justify-center '
                    >
                        Unlock All Features <Image src={lock} width={10} height={10} />
                    </button>
                    <div className='flex text-sm gap-2'>
                        <div className="flex items-center">
                            <div>
                                <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                                    {/* toggle */}
                                    <div className="relative">
                                        {/* input */}
                                        <input
                                            type="checkbox"
                                            id="toggleB"
                                            className="sr-only"
                                            checked={isChecked}
                                            onChange={toggleHandler}
                                        />
                                        {/* line */}
                                        <div className="block bg-[#FF5887] w-14 h-8 rounded-full"></div>
                                        {/* dot */}
                                        <div
                                            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isChecked ? 'transform translate-x-full bg-green-500' : ''
                                                }`}
                                        ></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <p className='lg:text-base text-sm	'>I certify I have read and agree to the Terms of Use and Cookie Notice. I certify I am at least 18-years old and have reached the age of majority where I live.</p>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={google} width={150} height={100} />
                        <Image src={apple} width={150} height={100} />
                    </div>
                </div>
            </div>
            <div className='w-1/2 relative'>
                <video autoPlay loop muted className='bg-black w-full  2xl:h-[60vh] max-h-[950px] lg:h-[60vh] h-[65vh] '>
                    <source src={video} type="video/mp4" className='hero-video' />
                </video>
                <div className='absolute top-0 right-0 p-10 flex gap-6'>
                    <Share2 className='text-white cursor-pointer' />
                    <AlignJustify className='text-white cursor-pointer' />
                </div>
                <div className='bg-[#EDEDED] px-6 py-4 flex gap-3 items-end'>
                    <div className='items-baseline'>
                        <Image src={setting} width={30} height={30} />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='underline text-xl text-dark font-semibold'>Report Bugs and Issue
                        </h2>
                        <p> 9,851,548 joined Camsurf <span>Special Offer, Get Plus Today!</span></p>
                        {/* <span className='bg-[#1C1C1C] w-[600px] py-2 flex justify-between pe-2 rounded-md relative'>
                            <input
                                type="text"
                                placeholder='Type Your Message Here and Press Enter'
                                className='outline-none ps-3 text-sm w-full bg-[#1C1C1C]'
                            />
                            <div>
                            <Emoji unified="1f423" size="25" />
                            </div>

                            <MoveRight className='text-[#1CA5FC] cursor-pointer'  />
                        </span> */}
                        <div className=''>
                            <InputEmoji
                                value={text}
                                onChange={setText}
                                cleanOnEnter
                                onEnter={handleOnEnter}
                                placeholder="Type Your Message Here and Press Enter"
                                style={{ width: '600px' }}  // Adjust the width value as needed
                            />
                        </div>
                    </div>
                </div>
            </div>

            {isUnlockModalOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay'
                    onClick={closeModalOnOutsideClick}
                >
                    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay' onClick={closeModalOnOutsideClick}>
                        <div className='bg-gradient-to-tr from-[#004b86] to-[#368FC7] p-10 rounded-lg shadow-md w-[800px] h-[500px] flex'>
                            <div className="w-1/2 pr-4 h-[400px]">
                                {/* Left side image */}
                                <Image src={leftGirlImage} alt='Left Image' width={300} height={900} className='h-[450px]' objectFit='cover' />
                            </div>

                            <div className="w-1/2 pl-4 flex flex-col justify-center">
                                <div className='flex flex-col text-center justify-center'>
                                    <p className='flex text-white text-center justify-center'>
                                        It’s Easy to Join <p className='font-bold text-xl text-white ml-2 mb-1 pb-1'>CamSurf,</p>
                                    </p>
                                    <p className='font-bold text-3xl text-white mb-4'>Get Started Now</p>
                                </div>
                                <button className='bg-google border border-gray-900 justify-center bg-white text-black text-lg font-bold px-4 py-2 mt-2 flex rounded-xl' onClick={() => alert('Login with Google clicked')}>
                                    <Image src={googleIcon} alt="googleIcon" className='h-8 w-8 mr-4' />Login with Google
                                </button>
                                <button className='bg-facebook border border-gray-900 justify-center bg-white text-black text-lg font-bold px-4 py-2 mt-2 flex rounded-xl' onClick={() => alert('Login with Google clicked')}>
                                    <Image src={fbLogoIcon} alt="googleIcon" className='h-8 w-8 mr-3 ' />Login with Facebook
                                </button>
                                <button onClick={openEmailLoginFields} className='bg-white border border-gray-900 text-black text-lg font-bold px-4 py-2 mt-2 rounded-xl'>
                                    Login with Email
                                </button>
                                {/* Email login fields */}
                                {showEmailLoginFields && (
                                    <div>
                                    </div>
                                )
                                }
                                {/* {showEmailLoginFields && (
                                    <div className="mt-4 shadow-md rounded-md p-4">
                                        <input type="email" placeholder="Email" className="border p-2 rounded-md" />
                                        <input type="password" placeholder="Password" className="border mt-2 p-2 rounded-md" />
                                    </div>
                                )} */}

                                <div className='mt-5'>
                                    <p className='text-white text-center'>10 111 062 joined CamSurf
                                    </p>
                                    <p className='text-white text-center my-6'>Already a Member? Log in Here</p>
                                    <p className='text-white text-center'>By clicking on one of the above options you hereby certify that you have read and agree to the terms of use.</p>
                                </div>
                            </div>
                            <button onClick={closeUnlockModal} className='absolute bg-white top-4 right-4 text-black hover:text-black'>
                                close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

// Export the HomeOne component as the default export
export default HomeOne;
