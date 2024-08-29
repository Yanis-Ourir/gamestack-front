import React from "react";
import DynamicIcon from "../atoms/dynamic-icon";

export default function Tag({name, icon}: {name: string, icon: string}) {
    return (
            <div className="bg-gradient-to-r from-[#C31432] to-purple-800 text-white w-fit px-4 rounded-full flex gap-3 text-xl items-center">
                <DynamicIcon icon={icon}/> {name}
            </div>
    )

}