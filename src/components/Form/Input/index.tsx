import { StyledLabel, StyledInput } from "./input.styles";

type Props = {
  label: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  error?: string;
  disabled?: boolean;
  rows?: number;
  multiline?: boolean;
  type?: string;
  size?: "small" | "medium" | "large";
  id?: string;
  focus?: boolean;
};

export function Input({
  label,
  name,
  onChange = () => {},
  value,
  error,
  size = "medium",
  disabled,
  rows = 1,
  multiline = false,
  id = name,
  type = "text",
  focus = false,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StyledLabel htmlFor={id} size={size} label={label} name={name} id={id}>
        {label}
      </StyledLabel>
      <StyledInput
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        multiline={multiline}
        focus={focus}
        type={type}
        rows={rows}
        disabled={disabled}
      />
      {error && (
        <span
          style={{
            color: "red",
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
