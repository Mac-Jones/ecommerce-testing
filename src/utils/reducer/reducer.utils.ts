import { AnyAction } from 'redux';

type Matchable<AC extends () => AnyAction> = AC & {
	type: ReturnType<AC>['type'];
	match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
	actionCreator: AC
): Matchable<AC>;

export function withMatcher<
	AC extends (...args: any[]) => AnyAction & {
		type: string;
	}
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
	const type = actionCreator().type;
	return Object.assign(actionCreator, {
		type,
		match(action: AnyAction) {
			console.log(action);

			return action.type === type;
		},
	});
}

export type ActionWithPayload<T, P> = {
	type: T;
	payload: P;
};

export type Action<T> = {
	type: T;
};

// function overloading comes from typescript not on javascript
// multiple function type with the same name for createAction
// make function using function declaration

export function createAction<T extends string, P>(
	type: T,
	payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
	type: T,
	payload: void
): Action<T>;

// not returning anything, it is the actual implementation of the coding. Must do overloading
export function createAction<T extends string, P>(type: T, payload: P) {
	return { type, payload };
}
