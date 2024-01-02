'use client';

import React from 'react';

// vendor
import Image from 'next/image';

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
    </aside>
  );
}

export default Sidebar;
