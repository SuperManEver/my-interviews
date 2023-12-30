// vendor
import React from 'react';
import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

// components
import Button from '@/app/components/ui/button';

// styles
import css from './styles.module.scss';

// icons
import muscleIcon from '@/app/assets/muscle.svg';

interface IProps {
  className?: string;
}

function Header({ className }: IProps) {
  return (
    <header className={cn(css.root, className)}>
      <div className={css.logo}>
        <Image src={muscleIcon} alt="title icon" width={32} height={32} />
        <h2 className={css.title}>My interviews</h2>
      </div>

      <Link href="/sign-in">
        <Button styleType="secondary" size="medium">
          Login
        </Button>
      </Link>
    </header>
  );
}

export default Header;
