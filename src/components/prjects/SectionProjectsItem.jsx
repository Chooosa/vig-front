import classnames from 'classnames';
import Image from 'next/image';
import React from 'react';
import Section from '@/components/common/Section';

function SectionProjectsItem({ index, id, title, projects }) {
  return (
    <Section id={id} className={classnames('section-projects-item', { 'row-reverse': index % 2 !== 0 })}>
      <h2 className="section-item-title">{title}</h2>

      <div className="section-container">
        {projects.map(({ id, label, desc, src, address }) => (
          <div key={id} className="project-card">
            <div className="card-image-wrap">
              <div className="card-image-container">
                <Image
                  src={src}
                  alt={label}
                  layout="fill"
                  top="10px"
                  right="10px"
                  bottom="10px"
                  left="10px"
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
