module.exports = async (req, res) => {
    try {
        const message = req.body.message;
        // Здесь можно сохранить сообщение в базу данных или выполнить другие действия
        res.send(`<div>${message}</div>`);
       // res.status(200).json({ files: message });
    } catch (error) {
        console.error('Ошибка при получении списка файлов:', error);
        res.status(500).json({ error: 'Не удалось получить список файлов' });
    }
};

