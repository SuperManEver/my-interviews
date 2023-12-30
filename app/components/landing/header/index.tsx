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

async function Header({ className }: IProps) {
  const { userId } = await auth();

  console.log('userId: ', userId);

  let href = userId ? '/dashboard' : '/sign-in';
  let title = userId ? 'Dashboard' : 'Login';

  return (
    <header className={cn(css.root, className)}>
      <div className={css.logo}>
        <Image src={muscleIcon} alt="title icon" width={32} height={32} />
        <h2 className={css.title}>My interviews</h2>
      </div>

      <Link href={href}>
        <Button styleType="secondary" size="medium">
          {title}
        </Button>
      </Link>
    </header>
  );
}

export default Header;
