import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RooState } from "../store/store";

export const useTypedSelector: TypedUseSelectorHook<RooState> = useSelector