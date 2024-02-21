import Section from '@/components/common/Section';
import classnames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

import AirportVladikavkazImageSrc from '../../../public/assets/home/projects/airport-vladikavkaz.png';
import AirportSimpheropolImageSrc from '../../../public/assets/home/projects/airport-simpheropol.png';
import ZavodKalugaImageSrc from '../../../public/assets/home/projects/kaluga-zavod.png';
import HospitalPrezidentImageSrc from '../../../public/assets/home/projects/hospital-prezident.png';
import AquatoriaImageSrc from '../../../public/assets/home/projects/aquatoria.png';

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
            <Image src={AirportSimpheropolImageSrc} alt="Аэропорт Симферополь" />
          </div>
          <div className="slider-content">
            <Image src={AirportVladikavkazImageSrc} alt="Аэропорт Владикавказ" />
          </div>
          <div className="slider-content">
            <Image src={ZavodKalugaImageSrc} alt="Звод Калуга" />
          </div>
          <div className="slider-content">
            <Image src={HospitalPrezidentImageSrc} alt="Госпиталь при призеденте" />
          </div>
          <div className="slider-content">
            <Image src={AquatoriaImageSrc} alt="ЖК Акватория" />
          </div>
        </Slider>
      )}
    </Section>
  );
}

export default SectionHomeProjects;
