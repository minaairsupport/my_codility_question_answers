import React, { useState } from 'react';

const MyTabsComponent = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(children?.[0]);
  if (!children || children.length === 0) {
    return null;
  }

  return (
    <div className='tabs'>
      {children.map((child) => (
        <button
          disabled={currentTab === child}
          key={child.title}
          onClick={() => setCurrentTab(child)}
        >
          {child.props.title}
        </button>
      ))}

      <div className='view'>{currentTab.props.children}</div>
    </div>
  );
};

export default MyTabsComponent;
