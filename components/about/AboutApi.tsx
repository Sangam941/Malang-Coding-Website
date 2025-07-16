import axios from 'axios';
import AboutSection from '@/components/about/About';

export const revalidate = 60; // <-- enables ISR

export default async function AboutPage() {
  const [res1, res2, res3, res4] = await Promise.all([
    axios.get(`${process.env.DOMAIN}/api/team-members`),
    axios.get(`${process.env.DOMAIN}/api/time-line`),
    axios.get(`${process.env.DOMAIN}/api/technologies`),
    axios.get(`${process.env.DOMAIN}/api/about-features`),
  ]);

  return (
    <AboutSection
      teamMembers={res1.data}
      timeline={res2.data}
      technologies={res3.data}
      features={res4.data}
    />
  );
}
