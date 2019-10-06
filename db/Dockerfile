FROM mariadb:10.4.8

LABEL MicroService="IMO.Store.MariaDB" Description="IMO.Store.MariaDB service"

# 1) setup for ko_KR.UTF-8 locale
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y locales
RUN sed -i -e 's/# ko_KR.UTF-8 UTF-8/ko_KR.UTF-8 UTF-8/' /etc/locale.gen && \
    echo 'LANG="ko_KR.UTF-8"'>/etc/default/locale && \
    dpkg-reconfigure --frontend=noninteractive locales && \
    update-locale LANG=ko_KR.UTF-8
ENV LANG ko_KR.UTF-8 

# 2) overwrite my.cnf
ADD mariadb.cnf /etc/mysql/mariadb.cnf

# 3) copy initial table data
COPY ./db/db_volumes /var/lib/mysql
COPY ./db/db_volumes/conf.d /etc/mysql/conf.d

# 4) run CMD mysqld
CMD ["mysqld"]
