FROM postgres:alpine

ADD data/extraitClean.csv /etc/
RUN chmod a+r /etc/extraitClean.csv

ADD data/db.sql /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*