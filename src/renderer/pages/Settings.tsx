import { Link } from 'umi';

export default function Settings() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Settings</h1>
      <br />
      <br />
      <div>
        Render somethings...<Link to='/'>[back]</Link>
      </div>
    </div>
  );
}
