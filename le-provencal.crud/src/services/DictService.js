import http from "../http-commons";

const getAll = () => {
  return http.get("/dict");
};

const getTopics = () => {
  return http.get("/dict_topics?order=topic");
};

const getSubTopics = (topicSelected) => {
  console.log(topicSelected);
  console.log(`/dict_subtopics?order=sub_topic&topic=plfts.${topicSelected}`);
  return http.get(`/dict_subtopics?order=sub_topic&topic=plfts.${topicSelected}`);
};

const getPart = (topic, subTopic) => {
  console.log(`/dict?order=trad_fr&topic=plfts.${topic}&sub_topic=plfts.${subTopic}`);
  return http.get(`/dict?order=trad_fr&topic=plfts.${topic}&sub_topic=plfts.${subTopic}`);
};

const updateEntry = (updateData) => {
  console.log(`/dict?id=eq.${updateData.id}`);
  console.log(updateData);
  return http.patch(`/dict?id=eq.${updateData.id}`, updateData);
};

const DictDataService = {
  getAll,
  getTopics,
  getSubTopics,
  getPart,
  updateEntry
};

export default DictDataService;