import React, { MouseEventHandler, useState } from 'react';
import { IoEllipsisHorizontal } from 'react-icons/io5';

type DropdownMenuProps = {
    editFunction: MouseEventHandler<HTMLParagraphElement>;
    deleteFunction: any;
};

export default function DropdownMenu({ editFunction, deleteFunction }: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div onClick={handleClick} className="cursor-pointer">
                <IoEllipsisHorizontal />
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 border border-gray-300 bg-slate-800 rounded-lg shadow-lg">
                    <div className="flex flex-col p-4 gap-2">
                        <p onClick={editFunction} className="hover:bg-sky-500 hover:cursor-pointer p-2 rounded">Update</p>
                        <p onClick={deleteFunction} className="hover:bg-red-600 hover:cursor-pointer p-2 rounded">Delete</p>
                    </div>
                </div>
            )}
        </div>
    );
};
