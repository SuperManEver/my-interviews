import React from 'react';

import css from './styles.module.scss';

interface IProps {
  text: string;
  author: string;
}

function Review({ text, author }: IProps) {
  return (
    <div className={css.root}>
      <p className={css.text}>{text}</p>
      <p className={css.author}>{author}</p>
    </div>
  );
}

export default Review;
