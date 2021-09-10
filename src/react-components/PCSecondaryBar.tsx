import {useEffect, useState} from "react";
import styles from './PCSecondaryBar.module.less';

interface SecondaryBar {
  name: string;
  link: string;
}

interface MenuItem {
  elementaryBar: string;
  secondaryBars: SecondaryBar[];
  display: boolean;
}

const menuBar: MenuItem[] = [
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
];

interface PropsType {
  activatedBar: string;
}

export default ({ activatedBar, ...others }: PropsType) => {
  const [activatedBarObject, setActivatedBarObject] = useState<MenuItem>();

  useEffect(() => {
    for (const menuItem of menuBar) {
      if (menuItem.elementaryBar === activatedBar) {
        setActivatedBarObject(menuItem);
        return
      }
    }
  }, [activatedBar]);

  return (
    <div id={styles.PCSecondaryBar} {...others}>
      <div id="navBarIndices">
        {activatedBarObject && activatedBarObject.secondaryBars.map((bar) => (
          <span
            className={styles.secondaryNavBarIndex}
            onClick={() => window.open(bar.link)}
            key={bar.name}
          >
            {bar.name}
          </span>
        ))}
      </div>
    </div>
  )
}
