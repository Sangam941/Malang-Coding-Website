import React from 'react'
import axios from 'axios'
import HeroSection from './Hero'

const HeroApi = async () => {
    const res = await axios.get('https://malangcode.pythonanywhere.com/api/hero');

    const data = res.data;
    console.log(data)
    return <HeroSection  data = {data}/>
}

export default HeroApi
