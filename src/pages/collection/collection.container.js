import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsPage from '../../pages/collection/collection.component';
const mapDispatchToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionsPageContainer = compose(
  connect(mapDispatchToProps),
  WithSpinner
)(CollectionsPage);
export default CollectionsPageContainer;
