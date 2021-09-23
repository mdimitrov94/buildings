import Overlay from '../../components/Overlay';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import styles from './Modal.module.scss';

export default function Modal({ onEsc, children }) {

  return (
    <>
      <Overlay />
      <div className={styles.Modal}>
          <div className={styles.Modal__closeBtn}>
          <IconButton color="error" onClick={onEsc}>
            <CancelIcon />
          </IconButton>
          </div>
          {children}
      </div>
    </>
  );
}
