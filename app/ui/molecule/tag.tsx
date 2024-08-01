import React from "react";

export default function Tag({tagName, icon}: {tagName: string, icon: React.ReactNode}) {
    return (
            <div className="bg-gradient-to-r from-[#C31432] to-purple-800 text-white w-fit px-4 rounded-full flex gap-3 text-xl items-center">
                {icon} {tagName}
            </div>
    )

}