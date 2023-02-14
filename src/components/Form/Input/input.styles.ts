import styled from "styled-components";

type LabelProps = {
  label: string;
  name: string;
  id: string;
  size: "small" | "medium" | "large";
};

type InputProps = {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  rows?: number;
  multiline?: boolean;
  type?: string;
  id?: string;
  focus?: boolean;
  size?: "small" | "medium" | "large";
};

export const StyledLabel = styled.label<LabelProps>`
  color: #fdfffc;
  font-size: ${(props) =>
    props.size === "small"
      ? "1rem"
      : props.size === "large"
      ? "2rem"
      : "1.5rem"};
`;

export const StyledInput = styled.input<InputProps>`
  color: #fdfffc;
  border: 1px solid #fdfffc;
  border-radius: 5px;
  padding: 10px;
  font-size: ${(props) =>
    props.size === "small"
      ? "1rem"
      : props.size === "large"
      ? "2rem"
      : "1.5rem"};
  margin-bottom: 10px;
`;
