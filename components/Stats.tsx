"use client";

import { useEffect, useRef, useState } from "react";
import { BriefcaseBusiness, Users, BadgeCheck, MapPinned } from "lucide-react";

type StatItem = {
  number: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
};

const stats: StatItem[] = [
  {
    number: 20,
    suffix: "+",
    label: "Anos de experiência",
    icon: <BriefcaseBusiness size={20} />,
  },
  {
    number: 1200,
    suffix: "+",
    label: "Clientes atendidos",
    icon: <Users size={20} />,
  },
  {
    number: + 30,
    suffix: "+",
    label: "Milhões em patrimônio protegido.",
    icon: <BadgeCheck size={20} />,
  },
  {
    number: 5,
    label: "Estados de atuação",
    icon: <MapPinned size={20} />,
  },
];

function AnimatedNumber({
  value,
  suffix = "",
  start,
}: {
  value: number;
  suffix?: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2200;
    const incrementTime = 20;
    const totalSteps = duration / incrementTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [start, value]);

  const formatted =
    count >= 1000 ? count.toLocaleString("pt-BR") : count.toString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setStartAnimation(true);
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className={`stats-header ${isVisible ? "show" : ""}`}>
          <span className="section-tag">Excelência em números</span>

          <h2 className="section-title">
            Números que comprovam nossa atuação
          </h2>

          <p className="section-text">
            Atuação jurídica com experiência, proximidade e estratégia para
            proteger empresas com segurança e confiança.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div
              className={`stat-card ${isVisible ? "show" : ""}`}
              key={index}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="stat-icon">{item.icon}</div>

              <div className="stat-top-line"></div>

              <h3 className="stat-number glow-number">
                <AnimatedNumber
                  value={item.number}
                  suffix={item.suffix}
                  start={startAnimation}
                />
              </h3>

              <div className="stat-divider"></div>

              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}