import React from 'react';
import axios from 'axios';
import Service from '@/app/service/ServiceRoute';

const ServiceApi = async () => {
              
  const [res] = await Promise.all([
    axios.get('https://malangcode.pythonanywhere.com/api/services')
  ]);

  const data = res.data;


  return <Service services = {data} />;
};

export default ServiceApi;
