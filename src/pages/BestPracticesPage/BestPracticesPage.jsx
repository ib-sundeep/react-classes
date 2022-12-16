import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Accordion from '../../components/Accordion';

const list = [
  'Render list item 1',
  'Render list item 2',
  'Render list item 3',
  'Render list item 4'
]


// <Component />
// <Component>My children</Component>
function BestPracticesPage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  // disposers = [() => {
  //   window.removeEventListener('resize', handleResize);
  // }]

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div>
      <Accordion heading="My Accordion">
        <ul>
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <Accordion
          heading="Nested Accordion"
          defaultExpanded={true}
        >
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </Accordion>
      </Accordion>
      {windowSize.width > 580 ? '<TableLayout />' : '<MobileLayout />'}
      <div>
        <div>Window width: {windowSize.width}</div>
        <div>Window height: {windowSize.height}</div>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default BestPracticesPage;
