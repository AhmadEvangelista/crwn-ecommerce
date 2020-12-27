import React, { Component } from 'react';
import MenuItem from '../../components/menu-item/menu-item.component.js';
import '../directory-menu/directory-menu.styles.scss';

class DirectoryMenu extends Component {
  state = {
    sections: [
      {
        title: 'HATS',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats',
      },
      {
        title: 'JACKETS',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets',
      },
      {
        title: 'SNEAKERS',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers',
      },
      {
        title: 'WOMENS',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens',
      },
      {
        title: 'MENS',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens',
      },
    ],
  };
  render() {
    return (
      <div className='directory-menu'>
        {/* {this.state.title.map((titles) => {
          return <MenuItem title={titles} />;
        })} */}
        {this.state.sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}
export default DirectoryMenu;