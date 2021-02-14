import { Link } from 'umi';

import { getGlobal } from '@/utils/electron';
import styles from './index.less';

export default function Index() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{getGlobal('title')}</h1>
      <br />
      <br />
      <Link to='/settings'>
        <img className={styles.image} src={require('../assets/yay.jpg')} width='400' />
      </Link>
    </div>
  );
}
