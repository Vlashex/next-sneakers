# 👟 Next Sneakers

Pet-проект интернет-магазина кроссовок, реализованный на **Next.js**.  
Цель проекта — изучение интеграции **Next.js** с базой данных через Prisma и построение полноценного e-commerce функционала.

---

## 🚀 Стек технологий

### Основные зависимости
- **Next.js** — фреймворк для серверного рендеринга и построения React-приложений.  
- **React** — библиотека для интерфейсов.  
- **TypeScript** — статическая типизация.  
- **Redux Toolkit** — управление состоянием.  
- **React Hook Form** — управление формами.  
- **MUI (Material UI)** + **Emotion** — стилизация и UI-компоненты.  
- **React Intersection Observer** — ленивый рендер и оптимизация списка.  
- **Prisma Client** — ORM для работы с базой данных.  
- **bcrypt** — хэширование паролей.  
- **jsonwebtoken** — авторизация через JWT.  
- **react-cookie** — управление куками.  

### Инструменты разработки
- **TypeScript** — строгая типизация.  
- **Prisma** — миграции и генерация клиента.  
- **ESLint** + **eslint-config-next** — линтинг.  
- **ts-node** — выполнение TypeScript-скриптов.  

---

## 📦 Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/username/next-sneakers.git
cd next-sneakers

# Установка зависимостей
npm install

# Подготовка базы данных
npx prisma migrate dev

# Запуск dev-сервера
npm run dev

# Сборка production
npm run build

# Запуск production
npm start
