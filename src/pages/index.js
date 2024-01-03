import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <span className={styles.indexCtasGitHubButtonWrapper}>
          <a href="https://github.com/geng-haoran/Simulately" target="_blank" >
            <img src="https://img.shields.io/github/stars/geng-haoran/Simulately?style=for-the-badge&color=E3F2FD&logo=github" />
          </a>
          &nbsp; &nbsp;
          <a href="https://github.com/geng-haoran/Simulately" target="_blank" >
            <img src="https://img.shields.io/github/watchers/geng-haoran/Simulately?style=for-the-badge&color=E3F2FD&logo=github" />
          </a>
          &nbsp; &nbsp;
          <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fsimulately.wiki&label=Visitors&countColor=%23e3f2fd" />
          &nbsp; &nbsp;
          <a href="https://x.com/simulately12492" target="_blank" >
            <img src="https://img.shields.io/twitter/follow/simulately12492?logo=x&style=for-the-badge&color=E3F2FD" />
          </a>
        </span>
        <h1 className="hero__title">Welcome to {siteConfig.title}</h1>
        <p className="hero__subtitle">🦾{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="/docs">
            Simulate Like a Pro 👉
        </Link>
        &nbsp; &nbsp;
        <Link
            className="button button--secondary button--lg"
            to="/gpt/gpt">
            Simulately GPT 🧠
        </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Simulately`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
