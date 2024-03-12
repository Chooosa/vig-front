import { useWindowDimensions } from '@/hooks';
import classnames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Section from '@/components/common/Section';

const MOBILE_WIDTH = 768;

function SectionProjectsItem({ index, id, title, projects }) {
  const { width } = useWindowDimensions();
  const imageWrapRef = useRef();
  const [imageWrapStyles, setImageWrapStyles] = useState(null);

  useEffect(() => {
    if (width <= MOBILE_WIDTH) {
      if (imageWrapRef.current) {
        const wrapWidth = imageWrapRef.current.offsetWidth;
        setImageWrapStyles({ height: `${wrapWidth/1.7}px` });
      }
    } else if (imageWrapStyles) {
      setImageWrapStyles(null);
    }
  }, [width]);

  return (
    <Section id={id} className={classnames('section-projects-item', { 'row-reverse': index % 2 !== 0 })}>
      <h2 className="section-item-title">{title}</h2>

      <div className="section-container">
        {projects.map(({ id, label, desc, src, address }) => (
          <div key={id} className="project-card">
            <div className="card-image-wrap" ref={imageWrapRef} style={imageWrapStyles}>
              <div className="card-image-container">
                <Image
                  src={src}
                  alt={label}
                  layout="fill"
                  top="10px"
                  right="10px"
                  bottom="10px"
                  left="10px"
                  priority={80}
                />
              </div>
            </div>

            <div className="description-wrap">
              <h3 className="card-label">{label}</h3>
              <p className="card-description">{desc}</p>

              {address && (
                <span className="card-addreaa">{address}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default SectionProjectsItem;
