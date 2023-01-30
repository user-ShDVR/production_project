import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from '../Loader';
import './PageLoader.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames('pageLoader', {}, [className])}>
            <Loader />
        </div>
    );
};
