import React from 'react';

import css from './styles.module.scss';

interface IProps {
  title: string;
  text: string;
}

function SellingPointCard({ title, text }: IProps) {
  return (
    <div className={css.root}>
      <p className={css.title}>{title}</p>

      <div className={css.divider} />

      <p className={css.text}>{text}</p>
    </div>
  );
}

export default SellingPointCard;
