import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapDispatchToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapDispatchToProps),
  WithSpinner
)(CollectionsOverview);
export default CollectionsOverviewContainer;
