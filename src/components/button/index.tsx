import { IReactProps } from '@/settings/type';
import Regular from './regular';

type TRegularProps = IReactProps & {
  onClick?: () => void;
};

const Button = ({ children, onClick }: TRegularProps) => {
  return <button onClick={onClick}>{children}</button>;
};

Button.regular = Regular;

export default Button;
