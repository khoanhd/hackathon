FROM php:5.6.31-fpm
#FROM php:7.0-fpm

ENV APP_ROOT /sample-project

WORKDIR $APP_ROOT

RUN apt-get update \
    && apt-get install -y git zlibc zlib1g zlib1g-dev libicu52 libicu-dev g++ \
    libssl-dev libmemcached-dev libmcrypt-dev libpq-dev zip unzip --no-install-recommends

RUN apt-get install -y libxml2-dev

RUN docker-php-ext-configure intl
RUN docker-php-ext-install intl

RUN docker-php-ext-install mysqli pdo_mysql pdo_pgsql zip opcache mbstring simplexml xml xmlrpc xmlwriter
RUN echo "opcache.max_accelerated_files = 20000" >> /usr/local/etc/php/conf.d/docker-php-ext-opcache.ini

RUN rm -r /var/lib/apt/lists/*

#RUN pecl install mongodb

#RUN docker-php-ext-enable mongodb.so
#RUN echo "extension=mongodb.so" > /usr/local/etc/php/php.ini

#RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
#RUN apt-get install -y nodejs
#RUN apt-get install -y build-essential

RUN curl -sS https://getcomposer.org/installer | php \
        && mv composer.phar /usr/bin/ \
        && ln -s /usr/bin/composer.phar /usr/bin/composer
RUN mkdir -p /usr/local/bin
RUN curl -LsS https://symfony.com/installer -o /usr/local/bin/symfony
RUN chmod a+x /usr/local/bin/symfony

COPY . $APP_ROOT

#RUN composer install --ignore-platform-reqs
#RUN composer update

RUN chmod 755 $APP_ROOT

RUN usermod -u 1000 www-data

ENV PATH="~/.composer/vendor/bin:./vendor/bin:${PATH}"


CMD ["php-fpm"]



