import { createSelector } from 'reselect';
import { sliceId } from './index';

export const selectFeature = (state) => {
    return state[sliceId];
};

export const selectPathname = createSelector(
    [selectFeature],
    state => state.location.pathname
);

export const selectSearch = createSelector(
    [selectFeature],
    state => state.location.search
);

export const selectHash = createSelector(
    [selectFeature],
    state => state.location.hash
);