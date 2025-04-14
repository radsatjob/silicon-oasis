import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Build documentation ground-up, left right and center with all the ps and qs - mind it! :)
      </>
    ),
  },
  {
    title: 'Customer-centricity and User Advocate',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
     Adept in thinking and behaving like an end-user all the time!
      </>
    ),
  },
  {
    title: 'Powered by Curiosity and Enthusiasm',
    Svg: require('@site/static/img/ladder-scaffold-stairs-svgrepo-com.svg').default,
    description: (
      <>
        Learning complex concepts to break them down to simple digestible nuggets!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
