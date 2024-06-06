import React from 'react';

type SectionHeaderProps = {
    title: string
}
const SectionHeader = (props: SectionHeaderProps) => {
    return (
        <div className="flex items-center py-6">
            <hr className="flex-grow border-t" />
            <span className="px-10 text-4xl font-bold">{props.title}</span>
            <hr className="flex-grow border-t" />
        </div>
    )
}

export default SectionHeader;