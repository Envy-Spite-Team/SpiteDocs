import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fully public',

    description: (
      <>
        Solaris Documentation project is public to everyone and the software is available on GitHub
      </>
    ),
  },
  {
    title: 'Learn how to create levels',

    description: (
      <>
        Here you will learn how to create levels for ULTRAKILL from start to finish!
      </>
    ),
  },
  {
    title: 'Aimed towards simplicity',

    description: (
      <>
        The documentation was made to be understandable by everyone. Both new creators and veterans of Rude LE.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
