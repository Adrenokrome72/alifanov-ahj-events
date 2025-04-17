# alifanov-ahj-events

Заготовка для игру с сеткой 4x4, в которой гоблин перемещается между ячейками каждую секунду.

## Статус сборки

[![Статус сборки](https://github.com/Adrenokrome72/alifanov-ahj-events/actions/workflows/deploy.yml/badge.svg)](https://github.com/Adrenokrome72/alifanov-ahj-events/actions)

## Описание

Этот проект представляет собой игру, в которой изображение гоблина случайным образом перемещается между ячейками сетки 4x4 каждые 1000 мс. Необходимо кликнуть по изображению курсором-молотком чтобы его прогнать. Ведется подсчет очков. В случае 5 промахов, игра завершается.
Используется Webpack для сборки, ESLint для проверки кода, Jest для тестирования и GitHub Actions для деплоя на GitHub Pages.

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/Adrenokrome72/alifanov-ahj-events.git
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Запустите локально:

   ```bash
   npm start
   ```

4. Соберите для продакшена:

   ```bash
   npm run build
   ```

## Тестирование

Запустите тесты с помощью:

```bash
npm test
```

## Деплой

Проект автоматически деплоится на GitHub Pages через GitHub Actions. Посетите: https://adrenokrome72.github.io/alifanov-ahj-events/