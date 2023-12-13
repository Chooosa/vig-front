import Section from '@/components/common/Section';
import classnames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

import tempProject1 from '../../../public/assets/home/projects/temp-project-1.jpg';
import tempProject2 from '../../../public/assets/home/projects/temp-project-2.jpg';

const Arrow = ({ type = 'next', onClick, style, className }) => (
  <div
    className={classnames(className, type, 'slider-arrow')}
    style={style}
    onClick={onClick}
  >
    <div className="chevron-icon" />
  </div>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Arrow />,
  prevArrow: <Arrow type="prev" />,
};

function SectionHomeProjects(props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return (
    <Section id="projects">
      {isMounted && (
        <Slider {...sliderSettings}>
          <div className="slider-content">
            <Image src={tempProject1} alt="temp" />
          </div>
          <div className="slider-content">
            <Image src={tempProject2} alt="temp" />
          </div>
        </Slider>
      )}
    </Section>
  );
}

export default SectionHomeProjects;
