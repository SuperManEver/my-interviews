// components
import Image from 'next/image';
import Header from '@/app/components/landing/header';

import heroImg from '@/app/assets/hero-image.png';

// styles
import css from './page.module.scss';

function Home() {
  return (
    <main>
      <Header className={css.header} />

      <section className={css.heroSection}>
        <div>
          <div className={css.titleWrapper}>
            <h1 className={css.title}>Get ready for your next big jump 🚀</h1>
          </div>

          <p className={css.text}>
            Are you ready to land your dream tech job? Unlock your full
            potential with us, the ultimate destination for mastering tech
            interviews and acing your career in the ever-evolving world of
            technology.
          </p>
        </div>

        <div>
          <Image
            src={heroImg}
            alt="hero image section"
            width={520}
            height={346}
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
