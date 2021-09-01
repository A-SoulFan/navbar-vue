import { useState, } from 'react';
import Plus from '../assets/plus.svg';
import Jump from '../assets/jump.svg';
import styles from './MobileMenu.module.less';

const Minus = Plus;

interface SecondaryBar {
  name: string;
  link: string;
}

interface MenuItem {
  elementaryBar: string;
  secondaryBars: SecondaryBar[];
  display: boolean;
}

const menuBars: MenuItem[] = [
  {
    elementaryBar: "用户讨论",
    secondaryBars: [
      {name: "happy1", link: "https://www.baidu.com"}
    ],
    display:false
  },
  {
    elementaryBar: "内容整理",
    secondaryBars: [
      {name: "happy2", link: "https://www.baidu.com"}
    ],
    display:false
  },
  {
    elementaryBar: "实用工具",
    secondaryBars: [
      {name: "枝网查重", link: "https://www.baidu.com"},
      {name: "成分姬", link: "https://www.baidu.com"},
      {name: "表情包", link: "https://www.baidu.com"},
      {name: "方言词典", link: "https://www.baidu.com"},
      {name: "今天溜什么", link: "https://www.baidu.com"},
      {name: "数据分析", link: "https://www.baidu.com"},
    ],
    display:false
  },
  {
    elementaryBar: "新人指南",
    secondaryBars: [
      {name: "happy3", link: "https://www.baidu.com"}
    ],
    display:false
  },
  {
    elementaryBar: "关于我们",
    secondaryBars: [
      {name: "happy2", link: "https://www.baidu.com"}
    ],
    display:false
  },
]

export default () => {
  const [activated, setActivated] = useState<string>();

  return (
    <div id={styles.mobileMenu}>
      <div id={styles.personalPart}>
        <div id="avatar">Avatar</div>
        <p id={styles.personalText}>登录/注册</p>
      </div>
      <div id="menu">
        {menuBars.map((bar) => (
          <div key={bar.elementaryBar} className={styles.menuBarWrapper}>
            <div
              className={styles.elementaryBar}
              onClick={() => setActivated(
                activated === bar.elementaryBar
                  ? undefined
                  : bar.elementaryBar
              )}
            >
              { bar.elementaryBar }
              <img
                style={{cursor: 'pointer', height: '16px',}}
                src={activated === bar.elementaryBar? Minus : Plus}
                alt="plus"
              />
            </div>
            {activated === bar.elementaryBar && (
              <div className={styles.secondaryBarsWrapper}>
                {bar.secondaryBars.map((secBar) => (
                  <div
                    className={styles.secondaryBar}
                    key={secBar.name}
                    onClick={() => window.open(secBar.link)}
                  >
                    { secBar.name }
                    <img
                      style={{
                        position: "absolute",
                        height: "16px",
                        right: "calc(5vw + 5px)",
                      }}
                      src={Jump}
                      alt="jump"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
