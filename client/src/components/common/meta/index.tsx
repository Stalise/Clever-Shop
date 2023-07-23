import React, { FC, ReactNode } from 'react';
import Head from 'next/head';

interface IProps {
    title?: string;
    description?: string;
    children: ReactNode;
}

export const Meta: FC<IProps> = ({ title, description, children }) => (
    <React.Fragment>
        <Head>
            <title>
                {title
                    ? `${title} в интернет-магазине Clever-Shop`
                    : 'Clever-Shop — интернет-магазин модной одежды'}
            </title>
            {description ? (
                <meta name='description' content={description} />
            ) : (
                <meta name='robots' content='noindex, nofollow' />
            )}
        </Head>
        {children}
    </React.Fragment>
);
