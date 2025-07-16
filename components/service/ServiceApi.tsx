import React from 'react';
import Service from '@/components/service/Service';

export const revalidate = 60; // ISR: regenerate the page every 60 seconds

const ServiceApi = async () => {
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/services`);

    if (!res.ok) {
      throw new Error('Failed to fetch services data');
    }

    const data = await res.json();

    return <Service services={data} />;
  } catch (error) {
    console.error('Error loading services:', error);
    return <div>Failed to load services.</div>;
  }
};

export default ServiceApi;
