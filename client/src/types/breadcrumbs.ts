import type { NextRouter } from 'next/router';

export interface IBreadcrumb {
    text: NextRouter['query'][0];
    path?: string;
}
