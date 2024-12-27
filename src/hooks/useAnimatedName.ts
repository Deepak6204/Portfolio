import { useState, useEffect } from 'react';

const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({ length }, () => 
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join('');
};

export const useAnimatedName = (finalName: string, iterations = 3, speed = 50) => {
  const [displayName, setDisplayName] = useState('');
  
  useEffect(() => {
    let currentIteration = 0;
    let currentIndex = 0;
    let intervalId: NodeJS.Timeout;

    const animate = () => {
      if (currentIndex > finalName.length) {
        currentIteration++;
        currentIndex = 0;
        
        if (currentIteration === iterations) {
          setDisplayName(finalName);
          clearInterval(intervalId);
          return;
        }
      }

      const randomPrefix = generateRandomString(finalName.length - currentIndex);
      const nameSlice = finalName.slice(0, currentIndex);
      setDisplayName(nameSlice + randomPrefix);
      currentIndex++;
    };

    intervalId = setInterval(animate, speed);
    return () => clearInterval(intervalId);
  }, [finalName, iterations, speed]);

  return displayName;
};