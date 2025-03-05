# Frontend Starter

## Описание

Frontend Starter предоставляет возможность быстро создавать фронтенд на основе React и TypeScript.

В качестве сборщика используется `Vite`.

В качестве менеджера пакетов используется `pnpm`.

## Запуск в DEV режиме

- Переходим в дирректорию `src`

  ```bash
   cd src
  ```

- Устанавливаем зависимости

  ```bash
   pnpm i
  ```

- Запускаем приложение

  ```bash
   pnpm run dev
  ```

## Запуск в Docker Compose

- Переходим в дирректорию `ci/local`

  ```bash
   cd ci/local
  ```

- Запускаем билд образа

  ```bash
   docker compose build
  ```

- Запускаем контейнеры
  ```bash
   docker compose up -d
  ```

---

- Чтобы посмотреть логи контейнеров, выполняем

  ```bash
   docker compose logs -f
  ```

- Для остановки контейнеро, выполняем
  ```bash
   docker compose down
  ```

---
