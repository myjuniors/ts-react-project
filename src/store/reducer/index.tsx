import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types';
import { INCREMENT, DECREMENT } from '../constants';

export function count(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
  }
  return state;
}