import * as Icons from 'react-icons/io5';
import { CgScreen } from "react-icons/cg";

export default function DynamicIcon({ icon }: { icon: string }) {
    // @ts-ignore
    const IconComponent = Icons[icon];

    if(!IconComponent) {
        return <CgScreen />;
    }

    return <IconComponent />;
}