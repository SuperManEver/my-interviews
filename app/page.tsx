// components
import Header from '@/app/components/landing/header';

// styles
import css from './page.module.css';

function Home() {
  return (
    <main>
      <Header className={css.header} />
    </main>
  );
}

export default Home;
