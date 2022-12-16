import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
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
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const divFromId = document.getElementById('my-div');
    console.log(divRef.current, divFromId);
  })

  return (
    <>
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
      <div id="my-div" ref={divRef}>
        <div>Window width: {width}</div>
        <div>Window height: {height}</div>
      </div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <Link to="/">Home</Link>
    </>
  );
}

export default BestPracticesPage;
