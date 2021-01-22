import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
