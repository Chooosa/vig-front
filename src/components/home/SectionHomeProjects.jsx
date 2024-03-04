import Section from '@/components/common/Section';
import { useDevice } from '@/hooks';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import Slider from "react-slick";
import VentilationImageSrc from '../../../public/assets/common/ventilation.jpg';

import AirportVladikavkazImageSrc from '../../../public/assets/projects/airport-vladikavkaz.png';
import AirportSimpheropolImageSrc from '../../../public/assets/projects/airport-simpheropol.png';
import ZavodKalugaImageSrc from '../../../public/assets/projects/kaluga-zavod.png';
import HospitalPrezidentImageSrc from '../../../public/assets/projects/hospital-prezident.png';
import AquatoriaImageSrc from '../../../public/assets/projects/aquatoria.png';

const Arrow = ({ type = 'next', onClick, style, className }) => (
  <div
    className={classnames(className, type, 'slider-arrow')}
    style={style}
    onClick={onClick}
  >
    <div className="chevron-icon" />
  </div>
);

const useSliderSettings = (isMobile) => useMemo(() => ({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: isMobile ? null : <Arrow />,
  prevArrow: isMobile ? null : <Arrow type="prev" />,
  arrow: !isMobile,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
}), [isMobile]);

const imgSrcById = {
  vladikavkaz: AirportVladikavkazImageSrc,
  simpheropol: AirportSimpheropolImageSrc,
  'novo-nordinsk': ZavodKalugaImageSrc,
  'hospital-prezident': HospitalPrezidentImageSrc,
  aquatoria: AquatoriaImageSrc,
}

function SectionHomeProjects(props) {
  const { t } = useTranslation('home');
  const { isMobile } = useDevice();
  const [isMounted, setIsMounted] = useState(false);
  const projects = t('projects', { returnObjects: true })
  const sliderSettings = useSliderSettings(isMobile);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return (
    <Section id="projects">
      <Image
        src={VentilationImageSrc}
        alt="Вентиляция"
        className="ventilation-image"
        objectFit="cover"
        objectPosition="50% 50%"
        quality={100}
        layout="fill"
      />

      <div className="section-container">
        {isMounted && (
          <Slider {...sliderSettings}>
            {projects.map(({ id, title, desc }) => (
              <div className="slide-wrapper" key={id}>
                <Image src={imgSrcById[id]} alt={title} priority />

                <div className="slide-content">
                  <h3 className="slide-title">{title}</h3>

                  <p className="slide-description">{desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </Section>
  );
}

export default SectionHomeProjects;
