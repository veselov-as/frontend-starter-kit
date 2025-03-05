
# Frontend Starter

## Описание

Frontend Starter предоставляет возможность быстро создавать фронтенд на основе React и TypeScript с использованием различных инструментов и технологий.

В качестве сборщика используется Vite, как сборщик веб-приложений для React, а также TypeScript.

## Запуск в Docker Compose

 * Переходим в дирректорию ```ci/local```.
    ```bash
    cd ci/local
    ```

 * Запускаем билд образа:
    ```bash
    docker compose build
    ```

 * Запускаем контейнеры:
    ```bash
    docker compose up -d
    ```

---

 * Чтобы посмотреть логи контейнеров, выполняем:
    ```bash
    docker compose logs -f
    ```

 * Для остановки контейнеро, выполняем:
    ```bash
    docker compose down
    ```
---

## тест