DOCKER SAMPLE

PHP 5.6 & nginx & mysql & composer

1. Install Docker vs docker-compose
  - https://docs.docker.com/compose/install/

2. CD to Directory have <docker-compose.yml> file to use <docker-compose> commands

3. Use be <docker-compose> commands to build vs start the containers:
  - Running <docker-compose build> command build the containers
  - Running <docker-compose up> command start the containers(Start Web application)
  - Running <docker-compose up --build> command  is start vs build the containers

4. Access website through <http://localhost:8080/> link

5. About composer commands, Look at content of <src/Dockerfile> file:
  - Using <RUN composer install --ignore-platform-reqs> to install packagists
  - Using <RUN composer update> to update packagists  
