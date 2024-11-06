import Image from "next/image";
import { EvaluationProps } from "./game-details";
import DynamicIcon from "../atoms/dynamic-icon";
import Tag from "./tag";

export default function EvaluationDetails({ evaluation }: { evaluation: EvaluationProps }) {


    return <div className="flex items-center justify-between gap-2 md:px-12 md:pb-12 border-b border-gray-600">
        <div className="flex items-center">
           
            <Image
                // @ts-ignore
                src={evaluation.user.image ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${evaluation.user.image.url}` : "/assets/static_images/No-Image-Placeholder.png"}
                alt="avatar de l'utilisateur"
                className="rounded-full"
                width={100}
                height={100}
            />
            <div className="flex flex-col mb-4 md:px-8">
                <div className="flex gap-2 items-center text-4xl">
                    <p className="text-white">{evaluation.user.pseudo}</p>
                    <p className="text-red-600 text-4xl md:hidden">{evaluation.rating}</p>
                </div>
                <div className="flex gap-3">
                    <div className={`flex items-center text-2xl gap-1 ${evaluation.status.color}`}>
                        <DynamicIcon icon={evaluation.status.icon} />
                        {evaluation.status.name}
                        <p className="text-gray-500"> - {evaluation.game_time} hours</p>
                    </div>
                </div>
                <div className="flex gap-3 my-4">
                    {evaluation.platforms.map((platform, index) => (
                        <Tag key={index} name={platform.name} icon={platform.icon} />
                    ))}
                </div>
                <p className="text-gray-500 text-2xl">{evaluation.description}</p>
            </div>
        </div>
        <p className="text-red-600 text-6xl hidden md:block">{evaluation.rating}</p>
    </div>

}