import { ReactNode } from 'react';
import { useKeenSlider, type KeenSliderOptions } from 'keen-slider/react';

interface SliderRootProps {
  children: ReactNode;
  config?: KeenSliderOptions;
}

function SliderRoot({ children, config = {} }: SliderRootProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(config);
  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  );
}

interface SliderSlideProps {
  children: ReactNode;
}

function SliderSlide({ children }: SliderSlideProps) {
  return <div className="keen-slider__slide">{children}</div>;
}

export const Slider = {
  Root: SliderRoot,
  Slide: SliderSlide,
};
