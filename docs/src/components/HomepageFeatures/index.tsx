import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import clsx from "clsx";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Start with SQL",
    Svg: require("@site/static/img/sql-database-generic.svg").default,
    description: (
      <>
        EmbraceSQL starts with your existing Postgres. No need to learn another
        schema language.
      </>
    ),
  },
  {
    title: "Strongly Typed",
    Svg: require("@site/static/img/Typescript_logo_2020.svg").default,
    description: (
      <>
        EmbraceSQL generates TypeScript for all your database schema. Never code
        a POJO again.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/React-icon.svg").default,
    description: (
      <>Connect directly to React with hooks. No need to write an API server.</>
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
        <Heading as="h3">{title}</Heading>
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
