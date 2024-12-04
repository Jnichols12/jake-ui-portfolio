import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
        <br></br>
        <Link className="button button--secondary button--lg" to="/blog/" style={{marginRight: "1rem"}}>
            Latest Blog Post
        </Link>
        <Link className="button button--secondary button--lg" to="/projects/mobile-order" style={{ marginLeft: "1rem" }}>
            View My First UI project
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Homepage for the UI portfolio belonging to Jake Nichols."
    >
      <HomepageHeader />
      <main>
        <div width="100%" style={{ textAlign: "center", marginTop: "2rem" }}>
            { /*TODO: Probably add something in here, but no idea what*/ }
        </div>
      </main>
    </Layout>
  );
}