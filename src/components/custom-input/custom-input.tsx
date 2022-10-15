import { ReactElement } from 'react';
import './custom-input.scss';

interface ICustomInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const CustomInput = (props: ICustomInputProps): ReactElement => {
  return <input className="custom-input" {...props} />;
};

export default CustomInput;
