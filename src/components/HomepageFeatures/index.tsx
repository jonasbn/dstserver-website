import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Worldwide servers",
    Svg: require("@site/static/img/globe-eurafrica.svg").default,
    description: (
      <>
        38 dedicated server regions over the world to make sure homies have a
        great time together.
      </>
    ),
  },
  {
    title: "Money saving",
    Svg: require("@site/static/img/chovynz_Money_Bag_Icon.svg").default,
    description: (
      <>
        Pay for running server per minute. Quickly deploy/terminate/resume game
        server.
      </>
    ),
  },
  {
    title: "Integrated with DST",
    Svg: require("@site/static/img/publicdomainq-native.svg").default,
    description: (
      <>
        Realtime log tracing, quickly pause/resume/rollback/kick/vote directly
        from the web. Built for mod-lovers. Anti-griefers system.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures(): JSX.Element {
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
