import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

// export const createAction = (type, payload) => {
// 	return { type, payload };
// };
// createAction = { type, payload }
