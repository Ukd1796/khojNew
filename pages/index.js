import React, {useEffect,useState} from 'react';
import { useUser} from '@auth0/nextjs-auth0/client';
import {RoughNotation} from "react-rough-notation";
import Link from "next/link";
import Layout from './layout';
import toast ,{Toaster} from 'react-hot-toast';
import Image from 'next/image';

export default function Home() {
  const { user } = useUser();
  const [active,setActive] = useState(false);

  useEffect(()=>{
    if(user) {
      setActive(true);
      toast.success(`Welcome! Fellow Researcher`);
    }

  },[user]);

  return (
    
    <Layout className='overflow-hidden'>
      <div className="flex flex-col gradient h-screen items-center justify-center bg-orange-100">
        <Toaster />
      <RoughNotation animationDelay={1000} animationDuration={2000} type="underline" show={true}>
        <h1 className="font-bold text-8xl">KHOJ</h1>
      </RoughNotation>

      <p className="mt-4 font-extralight text-xl">Your Own Research Assistant</p>
        {
          !active ?
            <button className='p-2 text-white text-md text-center rounded-lg  hover:bg-orange-900 cursor-pointer bg-orange-900 my-8 px-4 hover:scale-105 transition-all'>
              <Link href='/api/auth/login'>
                Get Started
              </Link>
            </button>
            :
            <button className='p-2 text-white text-md text-center rounded-lg hover:bg-orange-900 cursor-pointer bg-orange-900 my-8 px-4 hover:scale-105 transition-all'>
              <Link href='/workspace'>
                Start Researching!
              </Link>
            </button>
        }
      </div>
    </Layout>
    
  )
}
