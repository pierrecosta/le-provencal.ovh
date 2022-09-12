import React from "react";
import { StyledEngineProvider } from '@mui/material/styles';

import DictService from "../services/DictService";
import useDictState from "./useDictState";
import DictNavbar from "./DictNavbar";
import DictContent from "./DictContent";
import DictNavbarMui from "./DictNavbarMui";
import DictDataGrid from "./DictDataGrid";

//https://www.bezkoder.com/react-hooks-crud-axios-api/

const Dictionary = () => {
  // All States
  const {
    topicContent, subTopicContent, dataContent,
    selectTopic, setSelectTopic,
    selectSubTopic, setSelectSubTopic,
    updateData, setUpdateData,
    isUpdateActivated, setIsUpdateActivated
  } = useDictState();
  
  // Change info on Menu
  const onMenuClick = (notUsed, val) => {
    setSelectTopic(val);
  }

  // Change info on SubMenu
  const onSubMenuClick = (notUsed, val) => {
    setSelectSubTopic(val);
  }

  // Update data
  const onUpdateData = () => {
    if (updateData !== {}) {
      console.log("Update values");
      DictService.updateEntry(updateData).then(response => {
        if (response?.data) {
          console.log("Update done");
        }
      })
    }
  }

  return (
    <StyledEngineProvider injectFirst>
      <DictNavbarMui/>
      <DictNavbar
        topics={topicContent}
        subTopics={subTopicContent}
        selectTopic={selectTopic}
        selectSubTopic={selectSubTopic}
        onMenuClick={onMenuClick}
        onSubMenuClick={onSubMenuClick}
      />
      <DictContent
        dataContent={dataContent}
        onUpdateData={onUpdateData}
        updateData={updateData}
        setUpdateData={setUpdateData}
        isUpdateActivated={isUpdateActivated}
        setIsUpdateActivated={setIsUpdateActivated}
      />
      <div>
        <br/>
        <br/>
      </div>
      <DictDataGrid 
        dataContent={dataContent}
      />
      <div>
        <br/>
        <br/>
      </div>
    </StyledEngineProvider>
      
  );
}

export default Dictionary;