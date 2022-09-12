import "./DictContent.css";
import { ReactComponent as Valid } from '../images/valid.svg';
import { ReactComponent as Edit } from '../images/edit.svg';
import { ReactComponent as Unlock } from '../images/unlock.svg';
import { ReactComponent as Lock } from '../images/lock.svg';

const DictContent = props => {

  const handleUpdate = (e) => {
    console.log("Handle Update")
    props.onUpdateData();
    props.setUpdateData({});
  }
  const handleChange = (e) => {
    console.log("Handle Change: ")
    const { name, value } = e.target;
    console.log("Change " + name + " with value " + value);
    props.setUpdateData(prevState => ({
        ...prevState,
        [name]: value
    }));
  }

  const tableRow = (entry) => {
    if (entry.id === props.updateData.id) {
      return (
        <div key={props.updateData.id} className="table-row">
          <div className="table-dataTop">
            <input name="topic" value={props.updateData.topic} onChange={handleChange}/>
          </div>
          <div className="table-dataSub">
            <input name="sub_topic" value={props.updateData.sub_topic} onChange={handleChange}/>
          </div>
          <div className="table-data">
            <input name="trad_fr" value={props.updateData.trad_fr} onChange={handleChange}/>
          </div>
          <div className="table-data">
            <input name="trad_pr" value={props.updateData.trad_pr} onChange={handleChange}/>
          </div>
          <div className="table-dataMod" onClick={() => handleUpdate()}><Valid className="svg-table"/></div>
        </div>
      );
    } else {
      return (
        <div key={entry.id} className="table-row">
          <div className="table-dataTop" name="topic">{entry.topic}</div>
          <div className="table-dataSub" name="sub_topic">{entry.sub_topic}</div>
          <div className="table-data" name="trad_fr">{entry.trad_fr}</div>
          <div className="table-data" name="trad_pr">{entry.trad_pr}</div>
          {props.isUpdateActivated
            ? <div className="table-dataMod" onClick={() => props.setUpdateData(entry)}><Edit className="svg-table"/></div>
            : ""
          }
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="table">
        <div className="table-header">
			    <div className="header__itemTop">Catégories</div>
			    <div className="header__itemSub">Sous catégories</div>
			    <div className="header__item">Francais</div>
			    <div className="header__item">Provencal</div>
			    <div className="header__itemMod">
            {props.isUpdateActivated
              ? <div onClick={() => props.setIsUpdateActivated(!props.isUpdateActivated)}><Unlock className="svg-head-table"/></div>
              : <div onClick={() => props.setIsUpdateActivated(!props.isUpdateActivated)}><Lock className="svg-head-table"/></div>
            }
          </div>
        </div>
        <div className="table-content">
          {props.dataContent && props.dataContent.map((entry) =>
            tableRow(entry)
          )}
      </div>
    </div>
  </div>
  );
};

export default DictContent;