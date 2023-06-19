import { formatArea } from "@/helpers";

import styles from "./InfoBox.module.scss";

type InfoRowProps = {
  label: string;
  value: string;
};

type InfoBoxProps = {
  area: number;
  region: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <p className={styles.row}>
      {label}: <b>{value}</b>
    </p>
  );
}

function InfoBox({ area, region }: InfoBoxProps) {
  return (
    <div className={styles.container}>
      <InfoRow label="Region" value={region} />
      <InfoRow label="Area" value={formatArea(area)} />
    </div>
  );
}

export default InfoBox;
