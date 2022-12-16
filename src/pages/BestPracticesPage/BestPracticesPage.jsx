import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Accordion from '../../components/Accordion';
import useWindowSize from '../../hooks/useWindowSize';

const list = [
  'Render list item 1',
  'Render list item 2',
  'Render list item 3',
  'Render list item 4'
]


// <Component />
// <Component>My children</Component>
function BestPracticesPage() {
  const { width, height } = useWindowSize();

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
      {width > 580 ? '<TableLayout />' : '<MobileLayout />'}
      <div>
        <div>Window width: {width}</div>
        <div>Window height: {height}</div>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default BestPracticesPage;
