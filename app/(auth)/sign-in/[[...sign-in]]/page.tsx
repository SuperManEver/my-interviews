import { SignIn } from '@clerk/nextjs';

// styles
import css from './styles.module.scss';

function Page() {
  return (
    <div className={css.wrapper}>
      <SignIn />
    </div>
  );
}

export default Page;
