import Image from "next/image";
import { EvaluationProps } from "./game-details";
import DynamicIcon from "../atoms/dynamic-icon";
import Tag from "./tag";

export default function EvaluationDetails({ evaluation }: { evaluation: EvaluationProps }) {
    return <div className="flex items-center justify-between gap-2 px-12 pb-12 border-b border-gray-600">
        <div className="flex items-center">
            <Image
                src="/assets/static_images/icon-default.jpg"
                alt="avatar"
                className="rounded-full"
                width={100}
                height={50}
            />
            <div className="flex flex-col mb-4 px-8">
                <div className="flex gap-2 items-center text-4xl">
                    <p className="text-white">{evaluation.user}</p>
                    <p className="text-gray-500">{evaluation.game_time} heures</p>
                </div>
                <div className="flex gap-3">
                    <div className={`flex items-center text-2xl gap-1 ${evaluation.status.color}`}>
                        <DynamicIcon icon={evaluation.status.icon} />
                        {evaluation.status.name}
                    </div>
                    {evaluation.platforms.map((platform, index) => (
                        <Tag key={index} name={platform.name} icon={platform.icon} />
                    ))}
                </div>
                <p className="text-gray-500 text-2xl">{evaluation.description}</p>
            </div>
        </div>
        <p className="text-red-600 text-6xl">{evaluation.rating}</p>
    </div>

}