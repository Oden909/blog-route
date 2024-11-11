import React from 'react';
import { useNavigate } from 'react-router-dom';
import featuredData from '../../data/work_data.json';
import style from './Work.module.css';

function Work() {
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/work/${id}`);
  };

  return (
    <div className={style.pageWrapper}>
      <div className={style.container}>
        <section className={style.featuredWrapper}>
          <div className={style.container}>
            <h2>Works</h2>
            <div className={style.featuredList}>
              {featuredData.map(work => (
                <div 
                  key={work.id} 
                  className={style.featuredItem}
                  onClick={() => handleItemClick(work.id)}
                >
                  <img src={work.main_img} alt={work.title} className={style.featuredImg} />
                  <div className={style.featuredContent}>
                    <h3>{work.title}</h3>
                    <div className={style.featuredDetails}>
                      <span className={style.featuredYear}>{work.year}</span>
                      <span className={style.featuredTags}>{work.tags[0]}</span>
                    </div>
                    <p>{work.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Work;
