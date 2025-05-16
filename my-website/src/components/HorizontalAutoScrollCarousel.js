import React from 'react';
import Slider from 'react-slick';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

// Import slick-carousel CSS (put at top of your index.js or in your custom CSS)
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HorizontalAutoScrollCarousel() {
  const logos = [
    { src: useBaseUrl('/img/undraw_docusaurus_mountain.svg'), alt: 'Company 1', link: '/docs/guides/nference' },
    { src: useBaseUrl('/img/docusaurus.png'), alt: 'Company 2', link: '/docs/guides/razorpay' },
    { src: useBaseUrl('/img/undraw_docusaurus_react.svg'), alt: 'Company 3', link: '/docs/guides/congratulations' },
    { src: useBaseUrl('/img/undraw_docusaurus_tree.svg'), alt: 'Company 4', link: '/docs/guides/congratulations' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <Slider {...settings}>
        {logos.map(({ src, alt, link }, idx) => (
          <Link to={link} key={idx} style={{ padding: '10px' }}>
            <img src={src} alt={alt} style={{ maxHeight: 60, margin: '0 auto', display: 'block' }} />
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default HorizontalAutoScrollCarousel;
