//define os tipos de cada dado que o componente pode receber
interface InputTransparentProps {
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
}

function InputTransparent({
  type,
  placeholder = "",
  value,
  className = "",
}: InputTransparentProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`bg-transparent border border-white text-white p-2 px-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-white ${className}`}
    />
  );
}

export default InputTransparent;
