const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
app.use(cors());
app.use(express.json()); // Используем body-parser для разбора JSON из тела запроса

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/data/users.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'users.json'));
});

app.get('/data/services.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'services.json'));
});

app.get('/data/orders.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'orders.json'));
});
app.post('/data/orders.json', async (req, res) => {
  try {
    // Чтение текущих данных из файла
    const ordersFilePath = path.join(__dirname, 'data', 'orders.json');
    const data = await fs.readFile(ordersFilePath, 'utf-8');

    let orders; 

    if (data.trim() === '') {
      // Если файл пуст, установите orders в пустой массив или другое значение по умолчанию
      orders = [];
    } else {
      // Если файл не пуст, тогда парсите его содержимое
      orders = JSON.parse(data);
    }

    // Добавление нового заказа
    const newOrder = req.body; // Данные заказа передаются в теле запроса
    orders.push(newOrder);

    // Запись обновленных данных в файл
    await fs.writeFile(ordersFilePath, JSON.stringify(orders, null, 2), 'utf-8');

    // Отправка успешного ответа
    res.json({ success: true, message: 'Order added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
