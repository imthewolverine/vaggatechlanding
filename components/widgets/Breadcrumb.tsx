import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <nav
            className="breadcrumb-nav flex items-center justify-center text-sm text-white/80"
            aria-label="Breadcrumb"
        >
            {items.map((item, index) => (
                <React.Fragment key={`${item.label}-${index}`}>
                    
                    {/* ЭХНИЙ ITEM-ИЙН ӨМНӨ DOT */}
                    {index === 0 && (
                        <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
                    )}

                    {index > 0 && (
                        <span
                            className="breadcrumb-separator text-white/60 mx-2"
                            aria-hidden
                        >
                            //
                        </span>
                    )}

                    {item.href ? (
                        <Link
                            href={item.href}
                            className="breadcrumb-link text-white/80 hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span
                            className="breadcrumb-current text-white font-medium"
                            aria-current="page"
                        >
                            {item.label}
                        </span>
                    )}

                    {index === items.length - 1 && (
                        <span className="ml-2 h-2 w-2 rounded-full bg-emerald-400" />
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};


