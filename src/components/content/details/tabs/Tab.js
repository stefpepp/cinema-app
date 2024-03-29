import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Tab = ({ activeTab, label, onClick }) => {
  const [className, setClassName] = useState('tab-list-item');

  useEffect(() => {
    if (activeTab === label) {
      setClassName((prev) => (prev += ' tab-list-active'));
    } else {
      setClassName('tab-list-item');
    }
  }, [activeTab, label]);

  const onTabClick = () => {
    onClick(label);
  };
  return (
    <>
      <li className={className} onClick={onTabClick}>
        {label}
      </li>
    </>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Tab;
