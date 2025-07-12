import React from 'react';
import axios from 'axios';
import AboutSection from '@/components/about/About';

const AboutApi = async () => {
              
  const [res, res2, res3, res4] = await Promise.all([
    axios.get('https://malangcode.pythonanywhere.com/api/team-members'),
    axios.get('https://malangcode.pythonanywhere.com/api/time-line'),
    axios.get('https://malangcode.pythonanywhere.com/api/technologies'),
    axios.get('https://malangcode.pythonanywhere.com/api/about-features')
  ]);

  const data = res.data;
  const data2 = res2.data;
  const data3 = res3.data;
  const data4 = res4.data;


  return <AboutSection teamMembers={data} timeline={data2} technologies={data3} features={data4} />;
};

export default AboutApi;
