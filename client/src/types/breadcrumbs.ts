export interface IBreadcrumb {
    text: string;
    path?: string;
}

export interface IBreadcrumbs extends Array<IBreadcrumb> {}
