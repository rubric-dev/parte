import { createContext } from 'react';
import { RadioGroupProps } from './RadioGroup.types';

type RadioGroupContextType = Partial<Omit<RadioGroupProps, 'children'>>;

const RadioGroupContext = createContext<RadioGroupContextType>({});

export default RadioGroupContext;
