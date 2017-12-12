import { EMPLOYEE_UPDATE } from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  // no action required. So using redux thunk hack
  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employess`)
      .push({ name, phone, shift })
      .then(() => {
        Actions.main({ type: 'reset' });
      });
  };
};
