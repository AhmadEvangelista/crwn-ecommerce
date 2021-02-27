import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgrounImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgrounImageContainer
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ContentContainer className='content'>
        <TitleContainer className='title'>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer className='subtitle'>SHOP NOW!</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
