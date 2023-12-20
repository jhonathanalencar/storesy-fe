import type { KeenSliderOptions } from 'keen-slider/react';

export const productSliderOptions: KeenSliderOptions = {
  slides: { perView: 1 },
  breakpoints: {
    '(min-width: 28em)': {
      slides: { perView: 2, spacing: 5 },
    },
    '(min-width: 42em)': {
      slides: { perView: 3, spacing: 5 },
    },
    '(min-width: 54em)': {
      slides: { perView: 4, spacing: 5 },
    },
  },
};
