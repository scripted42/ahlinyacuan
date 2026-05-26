"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  hours: number;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ hours }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storageKey = "countdown_deadline";
    let deadline = sessionStorage.getItem(storageKey);

    if (!deadline) {
      const deadlineTime = new Date().getTime() + hours * 60 * 60 * 1000;
      deadline = deadlineTime.toString();
      sessionStorage.setItem(storageKey, deadline);
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = Number(deadline) - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [hours]);

  if (!mounted) return null;

  const units = [
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 text-center shadow-sm">
      <p className="text-amber-800 font-bold text-sm mb-3">
        ⏰ Diskon berakhir dalam:
      </p>
      <div className="flex justify-center gap-3 sm:gap-4">
        {units.map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="bg-white border border-amber-200 rounded-xl w-16 h-16 flex items-center justify-center mx-auto shadow-sm">
              <span className="text-2xl font-black text-amber-600 tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <p className="text-amber-800 text-[10px] font-bold uppercase tracking-wider mt-1.5">{unit.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
