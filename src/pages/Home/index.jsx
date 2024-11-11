import React from 'react';
import blogData from '../../data/blog_data.json';
import featuredData from '../../data/work_data.json';
import style from './Home.module.css';
import introAvatar from '../../assets/guy.png';


function formatDate(dateString) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
}

function Home() {
  return (
    <div className={style.pageWrapper}>
      <div className={style.container}>
        <section className={style.intro}>
          <div>
            <h1>Hi, I am John,<br />Creative Technologist</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <a href="https://github.com/Oden909/blog-route.git">
              <button className={style.downloadBtn}>GitHub</button>
            </a>
          </div>
          <img src={introAvatar} alt='introAvatar' />
        </section>
      </div>

      <section className={style.postsWrapper}>
        <div className={style.container}>
          <h2>Recent posts</h2>
          <div className={style.postList}>
            {blogData.slice(0, 2).map(post => (
              <div key={post.id} className={style.postItem}>
                <h3>{post.title}</h3>
                <div className={style.postHeader}>
                  <span className={style.postDate}>{formatDate(post.date)}</span>
                  <span className={style.postDivider}></span>
                  <span className={style.postTags}>{post.tags.join(', ')}</span>
                </div>
                <p>{post.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={style.featuredWrapper}>
        <div className={style.container}>
          <h2>Featured works</h2>
          <div className={style.featuredList}>
            {featuredData.slice(0, 3).map(work => (
              <div key={work.id} className={style.featuredItem}>
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
  );
}

export default Home;
