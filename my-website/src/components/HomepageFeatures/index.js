import React from 'react';
import CustomCard from '../components/CustomCard';
import './index.css'; // For cardGrid styles

export default function Home() {
  const handleShare = () => alert('Share clicked!');
  const handleLearnMore = () => alert('Learn More clicked!');

  const cardsData = [
    {
      image: '/img/header-bg.jpg',
      title: 'Card One',
      subtitle: 'Subtitle One',
      body: 'This is a description of card one.',
    },
    {
      image: '/img/header-bg-002.jpg',
      title: 'Card Two',
      subtitle: 'Subtitle Two',
      body: 'This is a description of card two.',
    },
    {
      image: '/img/docusaurus.png',
      title: 'Card Three',
      subtitle: 'Subtitle Three',
      body: 'This is a description of card three.',
    },
  ];

  return (
    <div className="cardGrid">
      {cardsData.map(({ image, title, subtitle, body }, idx) => (
        <CustomCard
          key={idx}
          image={image}
          title={title}
          subtitle={subtitle}
          body={body}
          onShare={handleShare}
          onLearnMore={handleLearnMore}
        />
      ))}
    </div>
  );
}
