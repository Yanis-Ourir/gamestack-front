import DynamicIcon from "./dynamic-icon";

type CheckboxProps = {
    type: string;
    id: string;
    name: string;
    label: string;
    value: string;
    required: boolean;
    iconName?: string;
    textColor?: string,
};

export default function Checkbox({ type, id, name, label, value, required, iconName, textColor }: CheckboxProps) {
  if(!textColor) {
    textColor = "text-white";
  }

  return (
    <label>
      <input type={type} id={id} name={name} value={value} required={required} />
        <span className={textColor}>
          <DynamicIcon icon={iconName} />
          {label}
        </span>
    </label>
  );
}