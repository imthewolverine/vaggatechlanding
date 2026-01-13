import React from 'react';

interface SectionTitleProps {
    title: string;
    dots: number;
    fontsize: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    dots,
    fontsize,
}) => {
    return (
        <div className="mb-12 flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            <span className={`${fontsize} font-medium text-white`}>{title}</span>
            {dots > 1 && (
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            )}
        </div>
    );
};

export default SectionTitle;