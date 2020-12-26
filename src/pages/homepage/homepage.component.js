import React from 'react';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component.js';

import '../homepage/homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
