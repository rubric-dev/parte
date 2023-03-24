import { RadioGroupProps } from "./RadioGroup.types";
import RadioGroupContext from "./RadioGroupContext";

export const RadioGroup = ({
  value,
  name,
  disabled = false,
  children,
  onChange,
}: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider value={{ value, name, disabled, onChange }}>
      {children}
    </RadioGroupContext.Provider>
  );
};
