export default function Input({label, type, id, name, required, className, placeholder, defaultValue}: {
    label: string | null;
    type: string;
    id: string;
    name: string;
    required: boolean;
    className: string;
    placeholder?: string;
    defaultValue?: string;
}) {
    return (
        <div>
            <label htmlFor={id} className="block text-md font-medium leading-6 text-white">{label}</label>
            <div className="mt-2">
                <input id={id} name={name} type={type} required={required} className={className} placeholder={placeholder} defaultValue={defaultValue ? defaultValue : ""}/>
            </div>
        </div>
    )
}
