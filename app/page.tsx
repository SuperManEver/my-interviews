// components
import Image from 'next/image';
import Header from '@/app/components/landing/header';
import SellingPointCard from '@/app/components/landing/selling-point-card';

// images
import heroImg from '@/app/assets/hero-image.png';

// styles
import css from './page.module.scss';

function Home() {
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
    </main>
  );
}

export default Home;
