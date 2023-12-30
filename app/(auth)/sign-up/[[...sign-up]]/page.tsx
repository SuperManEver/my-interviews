import { SignUp } from '@clerk/nextjs';

import Link from 'next/link';

// ui
import Button from '@/app/components/ui/button';

// styles
import css from './styles.module.scss';

function Page() {
  return (
    <div className={css.wrapper}>
      <header>
        <Link href="/sign-up">
          <Button styleType="secondary" className={css.backButton}>
            Go back
          </Button>
        </Link>
      </header>

      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/new-user"
        afterSignUpUrl="/new-user"
      />
    </div>
  );
}

export default Page;
