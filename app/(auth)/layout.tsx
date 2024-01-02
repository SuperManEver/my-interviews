import css from './styles.module.scss';

interface IProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children, // will be a page or nested layout
}: IProps) {
  return <section className={css.root}>{children}</section>;
}
