import React from 'react';

import Review from './review';

const reviews = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur. Amet ultricies risus aliquam fusce purus pellentesque quisque mauris. Auctor puruspharetra quam ut tempus et vitae at.',
    author: 'James Taylor',
  },
];

// Why this component is nested in landing folder?
function Reviews() {
  return (
    <div>
      <Review {...reviews[0]} />
    </div>
  );
}

export default Reviews;
