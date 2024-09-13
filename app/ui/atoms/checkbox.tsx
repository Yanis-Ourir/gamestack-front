
type CheckboxProps = {
    type: string;
    id: string;
    name: string;
    label: string;
    value: string;
    required: boolean;
    className: string;
};

export default function Checkbox({ type, id, name, label, value, required, className }: CheckboxProps) {
  return (
    <label>
      <input type={type} id={id} name={name} value={value} required={required} className={className} />
      <span>{label}</span>
    </label>
  );
}