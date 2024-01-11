// vendor
import React from 'react';
import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@clerk/nextjs';

// components
import Button from '@/app/components/ui/button';

// styles
import css from './styles.module.scss';

// icons
import muscleIcon from '@/app/assets/muscle.svg';

interface IProps {
  className?: string;
}

// Why this component is nested in landing folder?
async function Header({ className }: IProps) {
  const { userId } = await auth();

  let href = userId ? '/dashboard' : '/sign-in';
  let title = userId ? 'Dashboard' : 'Join now';

  return (
    <header className={cn(css.root, className)}>
      <Link href="/">
        <div className={css.logo}>
          <Image src={muscleIcon} alt="title icon" width={32} height={32} />
          <h2 className={css.title}>My interviews</h2>
        </div>
      </Link>

      <Link href={href}>
        <Button styleType="secondary" size="medium" className={css.button}>
          {title}
        </Button>
      </Link>
    </header>
  );
}

export default Header;
