'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'clsx';

import css from './styles.module.scss';

interface IProps {
  name: string;
  href: string;
  Icon?: any;
}

function LinkItem({ name, href, Icon }: IProps) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={cn(css.root, {
          [css.active]: href === pathname,
        })}
      >
        {Icon ? <Icon className={css.icon} /> : null}
        <p className={css.name}>{name}</p>
      </div>
    </Link>
  );
}

export default LinkItem;
