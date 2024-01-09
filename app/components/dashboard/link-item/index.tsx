import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'clsx';

import css from './styles.module.scss';

interface IProps {
  name: string;
  href: string;
  Icon?: any;
  className?: string;
}

function LinkItem({ name, href, Icon, className }: IProps) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={cn(
          css.root,
          {
            [css.active]: href === pathname,
          },
          className,
        )}
      >
        {Icon ? <Icon className={css.icon} /> : null}
        <p className={css.name}>{name}</p>
      </div>
    </Link>
  );
}

export default LinkItem;
