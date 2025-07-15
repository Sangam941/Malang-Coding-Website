import React from 'react';
import axios from 'axios';
import AboutSection from '@/app/about/AboutRoute';

export const revalidate = 60;

const AboutApi = async () => {
              
  const [res, res2, res3, res4] = await Promise.all([
    axios.get(`${process.env.DOMAIN}/api/team-members`),
    axios.get(`${process.env.DOMAIN}/api/time-line`),
    axios.get(`${process.env.DOMAIN}/api/technologies`),
    axios.get(`${process.env.DOMAIN}/api/about-features`)
  ]);

  const data = res.data;
  const data2 = res2.data;
  const data3 = res3.data;
  const data4 = res4.data;


  return <AboutSection teamMembers={data} timeline={data2} technologies={data3} features={data4} />;
};

export default AboutApi;
