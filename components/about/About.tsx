"use client";

import { useState, useEffect, useRef } from "react";
import { Users, CheckCircle, Heart, Calendar, Star } from "lucide-react";

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0, satisfaction: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { projects: 500, clients: 150, experience: 5, satisfaction: 99 };
    const steps = 60, duration = 2000;
    Object.entries(targets).forEach(([key, target]) => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);
    });
  };

  const stats = [
    { label: "Projects Completed", value: counters.projects, suffix: "+", icon: CheckCircle },
    { label: "Happy Clients", value: counters.clients, suffix: "+", icon: Heart },
    { label: "Years Experience", value: counters.experience, suffix: "+", icon: Calendar },
    { label: "Satisfaction Rate", value: counters.satisfaction, suffix: "%", icon: Star },
  ];

  return (
    <section ref={sectionRef} className="py-20" style={{backgroundColor:"var(--bg-color)"}}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="flex justify-center items-center gap-2 mb-4 text-sm text-blue-500">
            <Users className="w-4 h-4" />
            <span>About Malang Coders</span>
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{color:"var(--text-color)"}}>Crafting Digital <span className="text-blue-600">Excellence</span></h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We build powerful digital solutions to grow your business and engage your users.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map(({ label, value, suffix, icon: Icon }) => (
            <div key={label} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl text-center">
              <div className="flex justify-center items-center mb-2">
                <Icon className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-3xl font-bold">
                {value}{suffix}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
