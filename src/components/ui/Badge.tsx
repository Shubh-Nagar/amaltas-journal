import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'navy' | 'gold' | 'green' | 'maroon' | 'gray' | 'custom';
  className?: string;
  size?: 'sm' | 'md';
}

export default function Badge({ children, variant = 'navy', className, size = 'sm' }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-ui font-medium rounded',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        {
          'bg-navy-100 text-navy-800': variant === 'navy',
          'bg-gold-100 text-gold-800': variant === 'gold',
          'bg-green-100 text-green-800': variant === 'green',
          'bg-maroon-100 text-maroon-800': variant === 'maroon',
          'bg-gray-100 text-gray-700': variant === 'gray',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
