import React from 'react';
import { SwiperWrapper } from './SwiperWrapper';
import styles from './App.module.css';
import { SwiperSlide } from 'swiper/react';
import { blogs } from "./data";

const Blogs = () => {
  return (
    <div className={styles.blogWrapper}>
      <SwiperWrapper>
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className={styles.swiperSlide}>
            <div className={styles.blogCard}>
              <img src={blog.img} alt={blog.header} />
              <div className={styles.blogContent}>
                <h3>{blog.header}</h3>
                <p>{blog.details}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </div>
  );
}

export default Blogs
