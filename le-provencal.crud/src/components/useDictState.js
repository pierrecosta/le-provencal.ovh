import { useState, useEffect } from "react";
import DictService from "../services/DictService";

const useDictState = () => {
  const [topicContent, setTopicContent] = useState([]);
  const [subTopicContent, setSubTopicContent] = useState([]);
  const [selectTopic, setSelectTopic] = useState("");
  const [selectSubTopic, setSelectSubTopic] = useState("");
  const [dataContent, setDataContent] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [isUpdateActivated, setIsUpdateActivated] = useState(false);

  useEffect(() => {
    // Init Menu
    DictService.getTopics().then(response1 => {
      if (response1?.data) {
        setTopicContent(response1.data);
        setSelectTopic(response1.data[0].topic);
      }
    })
  }, []);

  useEffect(() => {
    // Init Sub Menu
    console.log("Selected topic is " + selectTopic);
    DictService.getSubTopics(selectTopic).then(response => {
      if (response?.data) {
        setSubTopicContent(response.data);
        setSelectSubTopic(response.data[0].sub_topic);
      }
    })
  }, [selectTopic]);

  useEffect(() => {
    // Init Data
    DictService.getPart(selectTopic, selectSubTopic).then(response => {
      if (response?.data) {
        console.log("Change Data");
        setDataContent(response.data);
      }
    })
    setUpdateData({});
  }, [selectTopic, selectSubTopic]);

  return {
    topicContent, subTopicContent, dataContent,
    selectTopic, setSelectTopic,
    selectSubTopic, setSelectSubTopic,
    updateData, setUpdateData,
    isUpdateActivated, setIsUpdateActivated
  };

}

export default useDictState;