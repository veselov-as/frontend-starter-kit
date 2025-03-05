# Frontend Starter

## Описание

Frontend Starter предоставляет возможность быстро создавать фронтенд на основе React и TypeScript.

В качестве сборщика используется `Vite`.

В качестве менеджера пакетов используется `pnpm`.

## Разработка

### Линтинг

Для обеспечения качества кода используется линтер ESLint.

Для запуска линтера используем команду `pnpm run lint`.

Для линтинга стилей используем команду `pnpm run lint:style`.

Для линтинга типов используем команду `pnpm run type-check`.

Для запуска линтинга по всему проекту используем команду `pnpm run lint:all`.

### Стили - CSS Modules

Для написания CSS используется CSS Modules.

Файлы стилей должны иметь расширение `.module.css`.

Подключение стилей в компоненты должно происходить так:

```tsx
import styles from './Button.module.css'

function Button() {
  return <button className={styles.btn}>Click me</button>
}
```

Если нам нужно добавить глобальные стили, то тогда создаем файл с расширением `.css`

## Запуск в DEV режиме

- Переходим в дирректорию `src`

  ```bash
   cd src
  ```

````

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
````
