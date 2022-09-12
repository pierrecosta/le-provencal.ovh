import React from "react";
import "./DictNavbar.css";
import { ReactComponent as Provence } from '../images/pignans.svg';

const DictNavbar = props => {
  return (
    <div className="app-header">
      <Provence className="title-logo"/>
      <h1>Dictionnaire Francais - Provencal</h1>
      <nav >
        <ul className="navbar-theme">
          {props.topics && props.topics.map((entry, index) => (
            <>
              {index !== 0 
                ? <li key={'S' + index} className="separator-li">|</li> : ""
              }
              <li
                key={index}
                onClick={() => props.onMenuClick(index, entry.topic)}
                className={entry.topic===props.selectTopic
                  ? "menu-selected" : ""
                }
              >
                {entry.topic}
              </li>
            </>
          ))}
        </ul>
        <ul className="navbar-theme-sub">
          {props.subTopics && props.subTopics.map((entry, index) => (
            <>
              {index === 0 
                ? ""
                :<li key={'S' + index} className="separator-li">|</li>
              }
              <li
                key={index}
                onClick={() => props.onSubMenuClick(index, entry.sub_topic)}
                className={entry.sub_topic===props.selectSubTopic
                  ? "menu-selected"
                  : ""
                }
              >
                {entry.sub_topic}
              </li>
            </>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default DictNavbar;