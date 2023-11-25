import React from 'react';
import './Tooltip.css'; // Import your styles

const Tooltip = () => {
  return (
    <div className='tooltip-container'>
      <div className='target-element'>
        Hover me
        <div className='tooltip'>
          <p>This is a tooltip. Describe how to use the feature here.</p>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
