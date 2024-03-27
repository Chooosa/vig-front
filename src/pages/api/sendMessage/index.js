import axios from 'axios';

const telegramUrl = 'https://api.telegram.org';
const botToken = 'bot6705998776:AAHEXqv_5OtJCeRmoBxyeGrN4l2K5-Yq658';
const prodChatId = '-1002071392866';
const testChatId = '-1002019706064';
const chatId = process.env.NODE_ENV === 'production' ? prodChatId : testChatId;

export default function GET(req, res) {
  const { name, email, phone, message } = req.query;

  let fields = [
    `<b>Имя</b>: ${name}`,
    `<b>E-mail</b>: ${email} `,
    `<b>Номер телефона</b>: +${phone} `,
    `<b>Сообщение</b>: ${message} `,
  ]
  let text = '';

  fields.forEach(field => {
    text += field + '\n'
  });

  return axios.get(`${telegramUrl}/${botToken}/sendMessage`, {
    params: {
      chat_id: chatId,
      parse_mode: 'html',
      text,
    },
  })
    .then(() => {
      return res.status(200).json({ ok: true });
    })
    .catch(({ response }) => {
      return res.status(response.status).json(response.data);
    });
}
