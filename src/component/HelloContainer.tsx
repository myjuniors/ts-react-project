import Hello from './Hello-redux';
import * as actions from '../store/actions';
import { StoreState } from '../store/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ count }: StoreState) {
  return {
    count
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);