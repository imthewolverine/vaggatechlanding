import React from 'react';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

interface PageHeaderProps {
    title: string;
    breadcrumbs: BreadcrumbItem[];
}

export const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
    return (
        <div className="pb-1">
            <Breadcrumb items={breadcrumbs} />
            <h1 className="page-title">{title}</h1>

        </div>
    );
};
