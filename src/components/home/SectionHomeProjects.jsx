import Section from '@/components/common/Section';
import { useDevice } from '@/hooks';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import Slider from "react-slick";

// import AirportVladikavkazImageSrc from '../../../public/assets/home/projects/airport-vladikavkaz.png';
// import AirportSimpheropolImageSrc from '../../../public/assets/home/projects/airport-simpheropol.png';
// import ZavodKalugaImageSrc from '../../../public/assets/home/projects/kaluga-zavod.png';
// import HospitalPrezidentImageSrc from '../../../public/assets/home/projects/hospital-prezident.png';
// import AquatoriaImageSrc from '../../../public/assets/home/projects/aquatoria.png';
//
// import AirportVladikavkazMobileImageSrc from '../../../public/assets/home/projects/mobile/airport-vladikavkaz.png';
// import AirportSimpheropolMobileImageSrc from '../../../public/assets/home/projects/mobile/airport-simpheropol.png';
// import ZavodKalugaMobileImageSrc from '../../../public/assets/home/projects/mobile/kaluga-zavod.png';
// import HospitalPrezidentMobileImageSrc from '../../../public/assets/home/projects/mobile/hospital-prezident.png';
// import AquatoriaMobileImageSrc from '../../../public/assets/home/projects/mobile/aquatoria.png';

import AirportVladikavkazNewImageSrc from '../../../public/assets/home/projects/new/airport-vladikavkaz.png';
import AirportSimpheropolNewImageSrc from '../../../public/assets/home/projects/new/airport-simpheropol.png';
import ZavodKalugaNewImageSrc from '../../../public/assets/home/projects/new/kaluga-zavod.png';
import HospitalPrezidentNewImageSrc from '../../../public/assets/home/projects/new/hospital-prezident.png';
import AquatoriaNewImageSrc from '../../../public/assets/home/projects/new/aquatoria.png';

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

// const imgSrcByDevice = {
//   desktop: {
//     vladikavkaz: AirportVladikavkazImageSrc,
//     simpheropol: AirportSimpheropolImageSrc,
//     kaluga: ZavodKalugaImageSrc,
//     hospital: HospitalPrezidentImageSrc,
//     aquatoria: AquatoriaImageSrc,
//   },
//   mobile: {
//     vladikavkaz: AirportVladikavkazMobileImageSrc,
//     simpheropol: AirportSimpheropolMobileImageSrc,
//     kaluga: ZavodKalugaMobileImageSrc,
//     hospital: HospitalPrezidentMobileImageSrc,
//     aquatoria: AquatoriaMobileImageSrc,
//   }
// };

const imgSrcById = {
  vladikavkaz: AirportVladikavkazNewImageSrc,
  simpheropol: AirportSimpheropolNewImageSrc,
  kaluga: ZavodKalugaNewImageSrc,
  hospital: HospitalPrezidentNewImageSrc,
  aquatoria: AquatoriaNewImageSrc,
}

function SectionHomeProjects(props) {
  const { t } = useTranslation('home');
  const { isMobile } = useDevice();
  const [isMounted, setIsMounted] = useState(false);
  const projects = t('projects', { returnObjects: true })
  const sliderSettings = useSliderSettings(isMobile);
  // const imgSrcById = useMemo(() => (
  //   imgSrcByDevice[isMobile ? 'mobile' : 'desktop']
  // ), [isMobile]);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return (
    <Section id="projects">
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
    </Section>
  );
}

export default SectionHomeProjects;
