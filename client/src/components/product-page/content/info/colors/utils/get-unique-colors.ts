import type { IImage } from 'types/common';
import { KeyType } from 'types/helpers';

export const getUniqueColors = (images: IImage[]) => {
    const result = images.reduce((accum, item) => {
        if (!accum[item.color]) {
            accum[item.color] = item.url;
        }

        return accum;
    }, {} as KeyType<string>);

    return result;
};
