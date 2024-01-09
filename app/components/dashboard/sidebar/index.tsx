'use client';

// vendor
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import cn from 'clsx';

import { useOutsideClick } from '@/utils/hooks';

// ui
import {
  ChartBarSquareIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

import LinkItem from '@/app/components/dashboard/link-item';

// icons
import muscleIcon from '@/app/assets/muscle.svg';
import burgerIcon from '@/app/assets/hamburger-sidebar.svg';

// styles
import css from './styles.module.scss';

function Sidebar() {
  const { user, isLoaded } = useUser();
  const [isMenuOpen, setMenuState] = useState<boolean>(false);
  const ref: any = useRef(null);

  useOutsideClick(ref, () => {
    setMenuState(false);
  });

  if (!isLoaded) {
    return null;
  }

  function handleMenuToggle() {
    setMenuState((state) => !state);
  }

  return (
    <aside
      ref={ref}
      className={cn(css.sidebar, { [css.sidebarOpen]: isMenuOpen })}
    >
      <button className={css.toggleMobileButton} onClick={handleMenuToggle}>
        <Image src={burgerIcon} alt="title icon" width={26} height={26} />
      </button>

      <header className={css.logo}>
        <Image src={muscleIcon} alt="title icon" width={32} height={32} />
        <h2 className={css.title}>My interviews</h2>
      </header>

      <section>
        <LinkItem
          name="Dashboard"
          href="/dashboard"
          Icon={ChartBarSquareIcon}
        />
        <LinkItem
          name="My Applications"
          href="/dashboard/my-applications"
          Icon={BriefcaseIcon}
        />
        <LinkItem
          name="Chat"
          href="/dashboard/chat"
          Icon={ChatBubbleLeftRightIcon}
        />
      </section>

      <footer className={css.footer}>
        <UserButton afterSignOutUrl="/" />
        <p className={css.userName}>{user?.firstName + ' ' + user?.lastName}</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
