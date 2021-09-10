import { useEffect, useState } from 'react';
import Asf from '../assets/Logo.svg';
import Search from '../assets/search.svg';
import User from '../assets/user.svg';
import Menu from '../assets/menu.svg';
import PCSecondaryBar from './PCSecondaryBar';
import MobileMenu from './MobileMenu';
import styles from './Navbar.module.less';

const menuItems: { name: string }[] = [
  {
    name: "用户讨论",
  },
  {
    name: "内容整理",
  },
  {
    name: "实用工具",
  },
  {
    name: "新人指南",
  }
];

export default () => {
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState<boolean>(false);
  const [navBarMobileobileMenuTouched, setNavBarMobileobileMenuTouched] = useState<boolean>(false);
  const [activatedBarName, setActivatedBarName] = useState<string>('');
  const [secondaryBarActivated, setSecondaryBarActivated] = useState<boolean>(false);

  const [bgColorMobile, setBgColorMobile] = useState('white');
  useEffect(() => {
    setBgColorMobile(navBarMobileobileMenuTouched? '#D1D5DB' : 'white');
  }, [navBarMobileobileMenuTouched])

  const clickHandler = (name: string) => {
    if (secondaryBarActivated === false) {
      setSecondaryBarActivated(true);
      setActivatedBarName(name);
    } else if (activatedBarName === name) {
      setSecondaryBarActivated(false);
    } else {
      setActivatedBarName(name);
    }
  };

  return (
     <div id={styles.navBar}>
      <div id={styles.navBarInnerWrapper}>
        <img src={Asf} id={styles.logo} alt="logo"/>
        <div id={styles.navBarIndices}>
          {menuItems.map(({name}) => (
            <span
              className={styles.navBarIndex}
              key={name}
              onClick={() => clickHandler(name)}
            >{name}</span>
          ))}
        </div>
        <div id={styles.navBarButtons}>
          <div className={styles.navBarButtonWrapper}>
            <img className={styles.navBarButton} src={Search} alt="search"/>
          </div>
          <div className={styles.navBarButtonWrapper}>
            <img className={styles.navBarButton} src={User} alt="user"/>
          </div>
          <div
            id={styles.navBarMobileMenuWrapper}
            className={styles.navBarButtonWrapper}
            onTouchStart={() => setNavBarMobileobileMenuTouched(true)}
            onTouchEnd={() => setNavBarMobileobileMenuTouched(false)}
            onClick={() => setMobileMenuDisplay(!mobileMenuDisplay)}
            style={{ backgroundColor: bgColorMobile }}
          >
            <img id={styles.navBarMobileMenu} className={styles.navBarButton} src={Menu} alt="menu"/>
          </div>
        </div>
      </div>
      {mobileMenuDisplay && <MobileMenu />}
      {secondaryBarActivated && (
        <PCSecondaryBar activatedBar={activatedBarName} />
      )}
    </div>
  );
}
