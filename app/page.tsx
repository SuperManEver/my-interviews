// vendor
import { auth } from '@clerk/nextjs';

// components
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/landing/header';
import SellingPointCard from '@/app/components/landing/selling-point-card';
import Reviews from '@/app/components/landing/reviews';
import Button from '@/app/components/ui/button';

// images
import heroImg from '@/app/assets/hero-image.png';

// styles
import css from './page.module.scss';

function Home() {
  const { userId } = auth();

  let href = userId ? '/dashboard' : '/sign-in';
  let title = userId ? 'Dashboard' : 'Join now';

  return (
    <main className={css.root}>
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

          <Link href={href} className={css.joinLink}>
            <Button styleType="secondary" size="medium" className={css.button}>
              {title}
            </Button>
          </Link>
        </div>

        <div className={css.heroImageWrapper}>
          <Image
            src={heroImg}
            alt="hero image section"
            width={520}
            height={346}
          />
        </div>
      </section>

      <section className={css.sellingPoints}>
        <h2 className={css.title}>Why choose us?</h2>

        <div className={css.sellPointsContainer}>
          <SellingPointCard
            title="Comprehensive Interview Prep"
            text="Tailored for tech roles, our platform offers a curated collection of real interview questions from top tech companies. Practice and perfect your skills with mock interviews that mimic the real experience. "
          />
          <SellingPointCard
            title="Insider Insights"
            text="Get exclusive insights into the interview processes of industry giants. Our platform provides the inside scoop on the latest trends, common pitfalls, and what recruiters are really looking for."
          />
          <SellingPointCard
            title="Community Support"
            text="Connect with a vibrant community of like-minded tech enthusiasts. Collaborate, share tips, and learn from each other's experiences. Our forums and discussion groups are the perfect places to seek advice, share success stories, and grow together."
          />
        </div>
      </section>

      <div className={css.divider} />

      <section className={css.reviews}>
        <div>
          <h2 className={css.title}>Out customers love what we do</h2>

          <div className={css.split}>
            <div className={css.blueDivider}></div>
            <div className={css.redDivider}></div>
            <div className={css.redDivider}></div>
          </div>
        </div>

        <Reviews />
      </section>

      <footer className={css.footer}>
        <p className={css.name}>MyInterviews © 2023 – 2024</p>
      </footer>
    </main>
  );
}

export default Home;
