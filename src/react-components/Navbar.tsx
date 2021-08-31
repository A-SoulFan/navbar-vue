import Asf from '../assets/Logo.svg';
import Search from '../assets/search.svg';
import User from '../assets/user.svg';
import Menu from '../assets/menu.svg';
import styles from './Navbar.module.less';

export default () => {
  return (
   <div id={styles.navBar}>
      <div id={styles.navBarInnerWrapper}>
        <img src={Asf} id={styles.logo} alt="logo"/>
        <div id={styles.navBarIndices}>
          <span className={styles.navBarIndex}>用户讨论</span>
          <span className={styles.navBarIndex}>内容整理</span>
          <span className={styles.navBarIndex}>实用工具</span>
          <span className={styles.navBarIndex}>新人指南</span>
          <span></span>
        </div>
        <div id={styles.navBarButtons}>
          <div className={styles.navBarButtonWrapper}>
            <img className={styles.navBarButton} src={Search} alt="search"/>
          </div>
          <div className={styles.navBarButtonWrapper}>
            <img className={styles.navBarButton} src={User} alt="user"/>
          </div>
          <div id={styles.navBarMobileMenuWrapper} className={styles.navBarButtonWrapper}>
            <img id={styles.navBarMobileMenu} className={styles.navBarButton} src={Menu} alt="menu"/>
          </div>
        </div>
      </div>
    </div>
  );
}
