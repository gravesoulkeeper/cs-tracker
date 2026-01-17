import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

import store from "./store";

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store;
