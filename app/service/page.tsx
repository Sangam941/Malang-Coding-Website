import React from 'react';
import axios from 'axios';
import Service from '@/app/service/ServiceRoute';

export const revalidate = 60;

const ServiceApi = async () => {
              
  const [res, res2] = await Promise.all([
    axios.get(`${process.env.DOMAIN}/api/services`),
    axios.get(`${process.env.DOMAIN}/api/packages`)

  ]);
  // console.log(res2.)

  const data = res.data;
  const data2 = res2.data


  return <Service services = {data} packages = {data2} />;
};

export default ServiceApi;
