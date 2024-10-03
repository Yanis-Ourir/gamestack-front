import React, { useState } from 'react';
import { IoEllipsisHorizontal } from 'react-icons/io5';

export default function DropdownMenu() {
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
                        <p className="hover:bg-sky-500 hover:cursor-pointer p-2 rounded">Modifier</p>
                        <p className="hover:bg-red-600 hover:cursor-pointer p-2 rounded">Supprimer</p>
                    </div>
                </div>
            )}
        </div>
    );
};
