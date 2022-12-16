import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Accordion.module.css'

function Accordion({
  defaultExpanded,
  heading,
  children,
  type, // 'danger', 'success', 'warning', 'primary'
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  function handleAccordionToggle() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={styles.root}>
      <div
        className={styles.heading}
        onClick={handleAccordionToggle}
      >
        <div className={styles.title}>
          {heading}
        </div>
        <div>
          {isExpanded ? '-' : '+'}
        </div>
      </div>
      {isExpanded && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
}

Accordion.defaultProps = {
  defaultExpanded: false,
}

Accordion.propTypes = {
  /**
   * Specifies if the accordion is open or close by default
   */
  defaultExpanded: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    'danger', 'primary', 'success', 'warning'
  ])
}

export default Accordion;
