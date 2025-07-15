import React from 'react'
import axios from 'axios'
import HeroSection from '@/components/hero/Hero'

export const revalidate = 60;

const HeroApi = async () => {
    const res = await axios.get(`${process.env.DOMAIN}/api/stats`);
    const data = res.data;
    
    return <HeroSection data = {data}/>
}

export default HeroApi
