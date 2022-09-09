FROM php:8.1-fpm

RUN apt-get update && apt-get install -y \
    libssh2-1-dev \
    libmagickwand-dev \
    libcurl4-openssl-dev \
    libc-client-dev \
    libkrb5-dev \
    wget \
    libssl-dev \
    libonig-dev \
    libpq-dev \
    freetds-bin \
    freetds-dev \
    freetds-common \
    libsqlite3-dev \
    libzip-dev \
    msmtp \
    zip \
    nano \
    vim \
    iputils-ping \
    --no-install-recommends \
    && rm -r /var/lib/apt/lists/*

RUN docker-php-ext-install mysqli pdo pdo_mysql