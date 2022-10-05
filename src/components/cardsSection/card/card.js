import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';
import { ReactComponent as PhotoIcon } from '../../../assets/svg/photo.svg';
import { ReactComponent as PlayIcon } from '../../../assets/svg/play.svg';
import { ReactComponent as SoundIcon } from '../../../assets/svg/sound.svg';
import { ReactComponent as LocationIcon } from '../../../assets/svg/location.svg';
import { ReactComponent as LocationThinIcon } from '../../../assets/svg/location_thin.svg';

import styles from './card.module.css';

export const Card = ({ title, region, img }) => {
  return (
    <div className={styles.card}>
      <figure className={styles.imageBlock}>
        <img src={img} alt="card" />
      </figure>
      <div className={styles.cardText}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.location}>
          <LocationThinIcon />
          <p>{region}</p>
        </div>
        <div className={styles.icons}>
          <InfoIcon />
          <PhotoIcon />
          <PlayIcon />
          <SoundIcon />
          <LocationIcon />
        </div>
      </div>
    </div>
  );
};
