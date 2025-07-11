import React from 'react';
import axios from 'axios';
import AboutSection from '@/app/about/AboutRoute';

const HeroApi = async () => {
              
  const [res, res2] = await Promise.all([
    axios.get('https://malangcode.pythonanywhere.com/api/team-members'),
    axios.get('https://malangcode.pythonanywhere.com/api/time-line')
  ]);

  const data = res.data;
  const data2 = res2.data;


  return <AboutSection teamMembers={data} timeline={data2} />;
};

export default HeroApi;
