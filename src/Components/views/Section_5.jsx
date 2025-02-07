import { div } from 'framer-motion/client';
import React, { useState } from 'react';

const Section_5 = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(prev => !prev);
  };

  return (
   <div></div>
  );
};

export default Section_5;
