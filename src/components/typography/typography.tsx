import { ReactElement } from 'react';
import './typography.scss';
type colors = 'red';

interface ITypographyProps {
  text: string;
  color?: colors;
  style?: React.CSSProperties | undefined;
}

const Typography = ({ text, color, style }: ITypographyProps): ReactElement => {
  return (
    <span style={style} className={`typography ${color}`}>
      {text}
    </span>
  );
};

export default Typography;
