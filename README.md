# TestSquad-HomeTask

Автоматизоване тестування GitHub з використанням WebDriverIO + JavaScript та патерну Page Object Model (POM).

## Опис проекту

Проект містить 5 автоматизованих тест-кейсів для перевірки основних функцій GitHub:

| #   | Тест-кейс                             | Опис                                                |
| --- | ------------------------------------- | --------------------------------------------------- |
| 1   | Sign-up Process Initiation            | Перевірка форми реєстрації та кнопки Create account |
| 2   | Navigating to Enterprise Cloud Trials | Навігація до Enterprise розділу через футер         |
| 3   | Subscribing to GitHub Resources       | Підписка на GitHub розсилку                         |
| 4   | Repository Search Functionality       | Пошук репозиторіїв                                  |
| 5   | Pricing and Feature Comparison        | Перевірка сторінки Pricing та порівняння функцій    |

## Технології

| Технологія  | Версія | Призначення                 |
| ----------- | ------ | --------------------------- |
| WebDriverIO | 9.20.0 | Фреймворк для автоматизації |
| JavaScript  | ES6+   | Мова програмування          |
| Mocha       | 9.20.0 | Тестовий фреймворк          |
| Faker.js    | latest | Генерація тестових даних    |
| Allure      | 2.34.1 | Формування звітів           |
| ESLint      | 9.39.1 | Перевірка коду              |
| Prettier    | 3.6.2  | Форматування коду           |

## Встановлення

```bash
# Клонування репозиторію
git clone <repository-url>
cd TestSquad-HomeTask

# Встановлення залежностей
npm install

# Тест 1: Реєстрація
npx wdio run src/config/wdio.conf.js --spec src/tests/signup.spec.js

# Тест 2: Enterprise
npx wdio run src/config/wdio.conf.js --spec src/tests/enterprise.spec.js

# Тест 3: Підписка
npx wdio run src/config/wdio.conf.js --spec src/tests/subscribe.spec.js

# Тест 4: Пошук
npx wdio run src/config/wdio.conf.js --spec src/tests/search.spec.js

# Тест 5: Ціни
npx wdio run src/config/wdio.conf.js --spec src/tests/pricing.spec.js

# Запуск з Allure звітом
npm run wdio-allure

# Перевірка якості коду
# Перевірка коду ESLint
npm run lint

# Автоматичне виправлення помилок
npm run lint:fix

# Перевірка форматування
npm run prettier

# Автоматичне форматування
npm run prettier:fix

# Повне форматування та перевірка
npm run format
```
