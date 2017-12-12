import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const INITAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === {prop: 'name', value: 'jane'}
      //ES6 key interpolation:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITAL_STATE;

    default:
      return state;
  }
};
