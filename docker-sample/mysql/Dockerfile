FROM mysql:5.7

ENV APP_ROOT /tmp

COPY . $APP_ROOT

RUN mysql -u root -p$MYSQL_ROOT_PASSWORD laravel < $APP_ROOT/laravel.sql