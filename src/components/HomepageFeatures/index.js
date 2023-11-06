import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '团队成员',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        申瑞婷📚202000130213📩2523677307@qq.com
        孙全 📚202000130230 📩1395170172@qq.com
        申蓉蓉📚202018130163📩2524662032@qq.com
        马超 📚201918130237 📩1084305024@qq.com
      </>
    ),
  },
  {
    title: '项目宗旨',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ❤关注边缘化人群需求，用爱发电，帮助建立边缘化人群和大众之间的纽带！❤
      </>
    ),
  },
  {
    title: '团队宗旨',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ✔协作
        ✔学习
        ✔创新
        ✔硬着头皮冲
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
