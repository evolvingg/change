import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div>hello there in my component <span className={styles.blueBg}>see u soon</span> gud bye for the time being
 	   </div>
    )
  }
}