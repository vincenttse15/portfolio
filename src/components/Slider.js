import * as React from "react";
import * as styles from "../styles/slider.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

SwiperCore.use([Navigation, Virtual]);

const Slider = () => {
  library.add(fas);

  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  const urls = [
    {
      url: "https://res.cloudinary.com/drlylnzt8/image/upload/v1627861857/portfolio/about/vincent_ld2otc.png", 
      key: "me"
    }, 
    {
      url: "https://res.cloudinary.com/drlylnzt8/image/upload/v1627848984/portfolio/about/woody_zfvluo.png", 
      key: "woody"
    },
    {
      url: "https://res.cloudinary.com/drlylnzt8/image/upload/v1627848984/portfolio/about/spiderverse_jrcykf.png", 
      key: "spiderverse"
    },
    {
      url: "https://res.cloudinary.com/drlylnzt8/image/upload/v1627848984/portfolio/about/shrek_adivxs.png", 
      key: "shrek"
    },
    {
      url: "https://res.cloudinary.com/drlylnzt8/image/upload/v1627848984/portfolio/about/findingnemo_audhvx.png", 
      key: "findingnemo"
    },
  ];

  const [selectedTab, setSelectedTab] = React.useState(urls[0]);

  const slides = urls.map((url, index) => (
    <img key={url.key} className={styles.thumbnail} alt="paint" src={url.url} onClick={() => setSelectedTab(url)} />
  ));

  return (
    <>
    <img src={selectedTab.url} alt="big paint" className={styles.bigImage} />
    <div className={styles.container}>
      <button type="button" ref={prevRef} className={`${styles.button} ${styles.left}`}>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} className={styles.icon} />
      </button>
      <button type="button" ref={nextRef} className={`${styles.button} ${styles.right}`}>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} className={styles.icon} />
      </button>
      <Swiper
        slidesPerView={3}
        navigation={{
          nextEl: nextRef.current ? nextRef.current : undefined,
          prevEl: prevRef.current ? prevRef.current : undefined,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        cssMode={false}
        className={styles.swiperContainer}
        spaceBetween={15}
        centeredSlides={true}
        slideToClickedSlide={true}
        loop={true}
        slidesPerGroup={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide virtualIndex={index} className={`${styles.slideContainer} ${selectedTab.key === slide.key ? `${styles.activeSlide}` : ''}`} >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
}

export default Slider;
