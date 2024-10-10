import React from "react";
import DynamicIcon from "../atoms/dynamic-icon";

export default function Tag({name, icon}: {name: string, icon: string}) {
    const platformMapping: { [key: string]: string } = {
        "PlayStation 2": "PS2",
        "PlayStation 3": "PS3",
        "PlayStation 4": "PS4",
        "PlayStation 5": "PS5",
        "Xbox Series S/X": "XSS/XSX",
        "Xbox One": "XOne",
        "Nintendo Switch": "Switch",
    };

    const displayName = platformMapping[name] || name;
    return (
            <div className="bg-gradient-to-r from-[#C31432] to-purple-800 text-white md:w-fit px-2 md:px-4 rounded-full flex gap-3 text-lg items-center">
                <DynamicIcon icon={icon}/> {displayName}
            </div>
    )

}