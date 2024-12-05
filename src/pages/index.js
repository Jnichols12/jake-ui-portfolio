import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import AboutMe from "@site/src/components/about-me.mdx";
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
    <Layout title={`Home`} description="Homepage for the UI portfolio belonging to Jake Nichols.">
      <HomepageHeader />
      <main style={{textAlign: "center", width: "100%"}}>
        <div style={{display: "inline-block", marginTop: "2rem", width: "60%"}}>
            <AboutMe />
        </div>
      </main>
    </Layout>
  );
}
