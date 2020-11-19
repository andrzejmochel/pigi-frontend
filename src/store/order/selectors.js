import {sliceId} from "./index";

export const selectFeature = (state) => {
    return state[sliceId];
};