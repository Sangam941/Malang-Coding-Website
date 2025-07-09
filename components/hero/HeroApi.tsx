import React from 'react'
import axios from 'axios'
import HeroSection from '@/components/hero/Hero'

const HeroApi = async () => {
    const res = await axios.get('https://malangcode.pythonanywhere.com/api/stats');
    const data = res.data;
    console.log(data)
    return <HeroSection data = {data}/>
}

export default HeroApi
