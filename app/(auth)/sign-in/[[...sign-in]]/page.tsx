import { SignIn } from '@clerk/nextjs';

import css from './styles.module.scss';

function Page() {
  return (
    <div className={css.wrapper}>
      <SignIn />
    </div>
  );
}

export default Page;
