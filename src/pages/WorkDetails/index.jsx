import React from 'react';
import { useParams } from 'react-router-dom';
import workData from '../../data/work_data.json';
import style from './WorkDetails.module.css';

function WorkDetails() {
  const { id } = useParams();
  const work = workData.find((item) => item.id.toString() === id);

  if (!work) {
    return <div style={{ textAlign: 'center' }}>Work not found</div>;
  }

  return (
    <div className={style.pageWrapper}>
      <div className={style.container}>
        <section className={style.intro}>
          <div>
            <h1>{work.full_title}</h1>
            <div className={style.workInfo}>
              <span className={style.featuredYear}>{work.year}</span>
              <span className={style.featuredTags}>{work.tags.join(', ')}</span>
            </div>
            <p>{work.text}</p>
          </div>
        </section>

        <section className={style.featuredWrapper}>
          <div className={style.featuredList}>
            {work.content
              .filter(contentItem => contentItem[0] === 'img')
              .map((contentItem, index) => (
                <img
                  key={index}
                  src={contentItem[1]}
                  alt={`content-${index}`}
                  className={style.contentImage}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default WorkDetails;
