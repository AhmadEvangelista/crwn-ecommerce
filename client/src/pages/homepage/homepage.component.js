import React from 'react';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component.js';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <DirectoryMenu />
    </HomePageContainer>
  );
};

export default HomePage;