import React from 'react';
import cn from 'clsx';

import css from './styles.module.scss';

// Define the types for the button props
interface IProps {
  styleType?: 'primary' | 'secondary' | 'success' | 'danger'; // Add more styles as needed
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

// Define default values for optional props
const defaultProps: Partial<IProps> = {
  styleType: 'primary',
  size: 'medium',
};

function Button(props: IProps) {
  const {
    styleType = 'primary',
    size = 'medium',
    onClick,
    className,
    children,
  } = {
    ...defaultProps,
    ...props,
  };

  const sizeCn = cn({ [css[size]]: true });
  const styleCn = cn({ [css[styleType]]: true });

  return (
    <button
      className={cn(css.root, sizeCn, styleCn, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
