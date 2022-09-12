CREATE TABLE dict (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(1000) NOT NULL,
  sub_topic VARCHAR(1000) NOT NULL,
  trad_fr VARCHAR(1000) NOT NULL,
  trad_pr VARCHAR(1000) NOT NULL
);
copy dict from '/etc/extraitClean.csv' DELIMITER '|' CSV;

CREATE TABLE topic (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(1000) NOT NULL,
  sub_topic VARCHAR(1000) NOT NULL
);

CREATE TABLE francais (
  id SERIAL PRIMARY KEY,
  trad_fr VARCHAR(1000) NOT NULL
);

CREATE TABLE provencal (
  id SERIAL PRIMARY KEY,
  trad_pr VARCHAR(1000) NOT NULL
);

CREATE TABLE content (
  id SERIAL PRIMARY KEY,
  topic_link VARCHAR(1000) NOT NULL,
  fr_link VARCHAR(1000) NOT NULL,
  pr_link VARCHAR(1000) NOT NULL
);

create table user (
  id varchar(255),
  username varchar(255)
);

create table posts (
  id varchar(255),
  author_id varchar(255),
  title varchar(255),
  body varchar(255)
);

insert into users (id, username) values (1, 'Pastaga'), (2, 'Elie'), (3, 'Rillette');

insert into posts (author_id, title, body) values
  (1, 'Hello world!', 'What a beautiful morning!'),
  (2, 'PostGraphile rocks', 'Help me build it!'),
  (3, 'Science rocks', 'Help me cure all the diseases!'),
  (4, 'Zzzz', 'zzzzzz'),
  (4, 'Zzzzzzz', 'zzzzzzzzzz'),
  (4, 'Zzz Huh? Zzzzzz', 'I''m awake!'),
  (5, 'Folk music rocks', 'Come watch some with me!');

CREATE VIEW dict_topics AS
  SELECT DISTINCT topic
  FROM dict;

CREATE VIEW dict_subtopics AS
  SELECT DISTINCT topic, sub_topic
  FROM dict
  GROUP BY topic, sub_topic;
  
INSERT INTO TOPIC (topic, sub_topic)
  SELECT DISTINCT topic, sub_topic from dict ORDER BY topic, sub_topic ASC
;
INSERT INTO FRANCAIS (trad_fr)
  SELECT DISTINCT trad_fr from dict ORDER BY trad_fr ASC
;
INSERT INTO PROVENCAL (trad_pr)
  SELECT DISTINCT trad_pr from dict ORDER BY trad_pr ASC
;
INSERT INTO CONTENT (topic_link, fr_link, pr_link)
  SELECT t.id, f.id, p.id
  FROM topic t, francais f, provencal p, dict d
  WHERE t.topic = d.topic
  AND t.sub_topic = d.sub_topic
  AND f.trad_fr = d.trad_fr
  AND p.trad_pr = d.trad_pr
;
