# Stage - Build
ARG DOCKER_REGISTRY
ARG NODEJS_BASE_IMAGE
ARG NGINX_BASE_IMAGE

FROM $DOCKER_REGISTRY/$NODEJS_BASE_IMAGE as builder

USER root

ARG FRONTEND_REGISTRY

# Рабочая директория
WORKDIR /app/

# Установка менеджера пакетов
COPY ../src/.npmrc .

RUN sed -i -e "s#https://registry.npmjs.org/#${FRONTEND_REGISTRY}#g" .npmrc
RUN npm install -g pnpm

COPY src/package.json .
COPY src/pnpm-lock.yaml .

# Установка зависимостей
RUN pnpm i

# Копирование файлов
COPY  ../src/ .

# Запуск сборки
RUN pnpm run build

#Удаление файлов, кроме каталога dist
RUN rm -rf node_modules package-lock.json pnpm-lock.yaml .cache .history .DS_Store

# Stage - NGINX
FROM $DOCKER_REGISTRY/$NGINX_BASE_IMAGE as final

EXPOSE 8080

USER root
RUN usermod -a -G root default
RUN chown -R root:root /etc/nginx
RUN chown -R root:root /usr/share/nginx/html

USER default

WORKDIR /etc/nginx
COPY --chown=root:root ../infrastructure/nginx/default.conf conf.d/default.template
COPY --chown=root:root ../infrastructure/nginx/nginx.conf nginx.conf
COPY --chown=root:root ../infrastructure/scripts/entrypoint.sh .

WORKDIR /usr/share/nginx/html
COPY --from=builder --chown=root:root /app/dist .
COPY --chown=root:root ../infrastructure/nginx/40x.html .
COPY --chown=root:root ../infrastructure/nginx/50x.html .

USER root
RUN rm /usr/share/nginx/html/404.html
# restrict permissions
RUN find /etc/nginx -type d | xargs chmod 770 && \
    find /etc/nginx -type f | xargs chmod 660 && \
    find /usr/share/nginx/html -type d | xargs chmod 770 && \
    find /usr/share/nginx/html -type f | xargs chmod 660

WORKDIR /etc/nginx
RUN chmod g+x entrypoint.sh
USER default

# process nginx variable placeholders
ENTRYPOINT ["sh", "entrypoint.sh"]

CMD nginx -g "daemon off;"