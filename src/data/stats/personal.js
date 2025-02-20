import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1994-08-05T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(9));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'height',
    label: 'Height',
    value: "6'2",
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Brooklyn, NY',
  },
  {
    key: 'countries',
    label: 'Favorite Sports Team',
    value: 'New York Knicks',
  },
];

export default data;
