import HeroSection from '@/components/hero/Hero';

export const revalidate = 60; // ✅ Enables ISR (rebuild every 60 seconds)

export default async function HeroPage() {
  const res = await fetch(`${process.env.DOMAIN}/api/stats`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return <HeroSection data={data} />;
}
