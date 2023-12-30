import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

// ui
import Button from '@/app/components/ui/button';

// styles
import css from './styles.module.scss';

function Page() {
  return (
    <div className={css.wrapper}>
      <header>
        <Link href="/">
          <Button styleType="secondary" className={css.backButton}>
            Go back
          </Button>
        </Link>
      </header>

      <SignIn redirectUrl="/dashboard" />
    </div>
  );
}

export default Page;
