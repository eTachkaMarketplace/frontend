import React, { useState } from 'react';

const ToggleContent = ({ isActive, children }) => {
  return isActive ? <div>{children}</div> : null;
};

const UserAnnouncement = () => {
  const [activeTab, setActiveTab] = useState('active');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <p onClick={() => handleTabChange('active')}>
        Активні
      </p>
      <p onClick={() => handleTabChange('inactive')}>
        Неактивні
      </p>

      <ToggleContent isActive={activeTab === 'active'}>
        <p>Содержимое для Активных</p>
        {/* Добавьте нужный контент для активных */}
      </ToggleContent>

      <ToggleContent isActive={activeTab === 'inactive'}>
        <p>Содержимое для Неактивных</p>
        {/* Добавьте нужный контент для неактивных */}
      </ToggleContent>
    </div>
  );
};

export default UserAnnouncement;
