export const Input = ({
  value,
  change,
  placeholder,
  type,
  iconLeft,
  iconRight,
}: {
  value: string;
  change?: (text: string) => void;
  placeholder?: string;
  type: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}) => {
  return (
    <label htmlFor={value} className="inputcontainer">
      {iconLeft && iconLeft}
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (change) {
            change(e.target.value);
          }
        }}
        type={type}
        id={value}
      />
      {iconRight && iconRight}
    </label>
  );
};
