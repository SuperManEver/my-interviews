// styles
import css from './styles.module.scss';

interface IProps {
  children: React.ReactNode;
}

// ui
import Sidebar from '@/app/components/dashboard/sidebar';

function DashboardLayout({ children }: IProps) {
  return (
    <div className={css.root}>
      <Sidebar />
      <section className={css.contentArea}>{children}</section>
    </div>
  );
}

export default DashboardLayout;
