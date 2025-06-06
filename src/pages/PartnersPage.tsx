import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Button } from '../components/UI';

const PartnersPage: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    partnerType: 'integration',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would be connected to API in a real app)
    console.log('Form submitted with data:', formData);
    alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      partnerType: 'integration',
    });
  };

  const partnerTypes = [
    {
      id: 'integration',
      title: 'Интеграционное партнерство',
      description:
        'Интегрируйте наш API в свои системы для автоматической оценки повреждений автомобилей.',
      icon: '🔌',
      features: [
        'Доступ к API AutoCheck AI',
        'Техническая документация',
        'Поддержка при интеграции',
        'Специальные ценовые условия',
      ],
    },
    {
      id: 'business',
      title: 'Бизнес-партнерство',
      description:
        'Станьте официальным партнером AutoCheck AI и предоставляйте наши услуги своим клиентам.',
      icon: '🤝',
      features: [
        'Официальный статус партнера',
        'Маркетинговые материалы',
        'Обучение сотрудников',
        'Комиссионные вознаграждения',
      ],
    },
    {
      id: 'referral',
      title: 'Реферальное партнерство',
      description:
        'Рекомендуйте нас своим клиентам и получайте вознаграждение за каждого привлеченного клиента.',
      icon: '💼',
      features: [
        'Реферальные ссылки',
        'Отслеживание конверсий',
        'Выплаты за привлеченных клиентов',
        'Партнерский личный кабинет',
      ],
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Партнерская программа</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Развивайте свой бизнес вместе с AutoCheck AI и предлагайте клиентам инновационные решения для оценки повреждений автомобилей
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{type.title}</h2>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <h3 className="text-lg font-semibold mb-3">Преимущества:</h3>
                <ul className="space-y-2 mb-8">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={() => setFormData({ ...formData, partnerType: type.id })}
                  variant="secondary"
                  className="w-full"
                >
                  Стать партнером
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-primary-50 rounded-2xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Кому подходит партнерская программа</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Автосервисы и СТО',
                    description:
                      'Предложите клиентам точную оценку повреждений и стоимости ремонта перед началом работ.',
                  },
                  {
                    title: 'Страховые компании и брокеры',
                    description:
                      'Ускорьте процесс урегулирования убытков и сократите расходы на оценку ущерба.',
                  },
                  {
                    title: 'Автодилеры',
                    description:
                      'Используйте для оценки состояния автомобилей при выкупе, trade-in и продаже подержанных автомобилей.',
                  },
                  {
                    title: 'ИТ-компании и разработчики',
                    description:
                      'Интегрируйте наш API в свои продукты и расширьте их функциональность.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="text-xl font-bold mb-6">Заявка на партнерство</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Компания
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-1">
                    Тип партнерства
                  </label>
                  <select
                    id="partnerType"
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="integration">Интеграционное партнерство</option>
                    <option value="business">Бизнес-партнерство</option>
                    <option value="referral">Реферальное партнерство</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Расскажите о вашей компании и целях сотрудничества"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о партнерской программе AutoCheck AI
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[
              {
                question: 'Как происходит интеграция с API?',
                answer:
                  'Мы предоставляем подробную документацию, SDK для основных языков программирования и техническую поддержку. Обычно интеграция занимает не более 2-3 дней работы разработчика.',
              },
              {
                question: 'Какие комиссионные выплачиваются за реферальное партнерство?',
                answer:
                  'Партнеры получают до 20% от платежей привлеченных клиентов в течение первого года сотрудничества.',
              },
              {
                question: 'Какие требования к партнерам?',
                answer:
                  'Основные требования: юридическое лицо или ИП, опыт работы в автомобильной сфере, наличие клиентской базы или трафика.',
              },
              {
                question: 'Как быстро рассматривается заявка на партнерство?',
                answer:
                  'Мы рассматриваем заявки в течение 2-3 рабочих дней и связываемся с подходящими кандидатами для обсуждения деталей сотрудничества.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="font-semibold mb-2 text-lg">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PartnersPage;
