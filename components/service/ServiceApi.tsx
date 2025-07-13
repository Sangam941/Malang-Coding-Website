import React from 'react';
import axios from 'axios';
import Service from '@/components/service/Service';

const ServiceApi = async () => {
              
  const [res] = await Promise.all([
    axios.get(`${process.env.DOMAIN}/api/services`)
  ]);

  const data = res.data;


  return <Service services = {data} />;
};

export default ServiceApi;
