import clsx from 'clsx';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold' | 'outline-white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
}

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: undefined;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: undefined;
  type?: undefined;
}

type Props = ButtonProps | LinkProps;

const base = 'inline-flex items-center gap-2 font-ui font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none rounded';

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-navy-800 text-white hover:bg-navy-700 active:bg-navy-900 shadow-sm hover:shadow-md',
  secondary: 'bg-white text-navy-800 border border-navy-200 hover:border-navy-400 hover:bg-navy-50',
  ghost: 'text-navy-800 hover:bg-navy-50',
  gold: 'bg-gold-400 text-navy-950 hover:bg-gold-500 shadow-gold',
  'outline-white': 'border border-white/50 text-white hover:bg-white/10',
};

export default function Button({ children, variant = 'primary', size = 'md', className, disabled, ...rest }: Props) {
  const classes = clsx(base, sizes[size], variants[variant], disabled && 'opacity-50 cursor-not-allowed', className);

  if ('href' in rest && rest.href !== undefined) {
    return (
      <Link to={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={(rest as ButtonProps).type ?? 'button'}
      onClick={(rest as ButtonProps).onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
