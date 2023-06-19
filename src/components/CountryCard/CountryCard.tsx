import { InfoBox } from "@/components";

import styles from "./CountryCard.module.scss";

type CountryCardProps = {
  data: Country;
};

function CountryCard({ data }: CountryCardProps) {
  return (
    <article className={styles.container}>
      <h2 className={styles.name}>{data.name} </h2>
      <InfoBox area={data.area} region={data.region} />
    </article>
  );
}

export default CountryCard;
