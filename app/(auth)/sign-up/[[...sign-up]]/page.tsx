import { SignUp } from '@clerk/nextjs';

// styles
import css from './styles.module.scss';

function Page() {
  return (
    <div className={css.wrapper}>
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
