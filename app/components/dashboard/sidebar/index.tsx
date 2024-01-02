'use client';

// vendor
import Image from 'next/image';
import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';

// ui
import {
  ChartBarSquareIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

import LinkItem from '@/app/components/dashboard/link-item';

// icons
import muscleIcon from '@/app/assets/muscle.svg';

// styles
import css from './styles.module.scss';

function Sidebar() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <aside className={css.sidebar}>
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
        <UserButton />
        <p className={css.userName}>{user?.firstName + ' ' + user?.lastName}</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
