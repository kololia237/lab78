# 1. Базовий образ Node (alpine-версія)
FROM node:18-alpine

# 2. Робоча папка для файлів проекту /ipzm214_kov/app
WORKDIR /ipzm214_kov/app

# 3. Копіюємо файли package.json та package-lock.json в образ
COPY package*.json ./

# 4. Встановлюємо залежності
RUN npm install

# 5. Копіюємо вихідний код
COPY . .

# 6. Повідомте Docker про порт 3000, на якому прослуховується ваш сервіс
EXPOSE 3000

# 7. Проінформуйте про команду запуску сервісу (npm run start)
CMD ["npm", "run", "start"]