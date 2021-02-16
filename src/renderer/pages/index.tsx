import { Link } from 'umi';

import styles from './index.less';

export default function Index() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Yay! Welcome to Electron Pro!</h1>
      <br />
      <br />
      <Link to='/settings'>
        <img className={styles.image} src={require('../assets/yay.jpg')} width='400' />
      </Link>
    </div>
  );
}
