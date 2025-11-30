import { MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer id="privacy-policy" className="bg-foreground text-background py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Logo and contact */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">CF</span>
              </div>
              <span className="font-bold text-xl text-background">
                coolfeedback
              </span>
            </a>
            
            <p className="text-background/70 mb-6 max-w-md">
              Профессиональный сервис по продвижению бизнеса на картографических сервисах. 
              Работаем с 2020 года.
            </p>
            
            <a
              href="https://t.me/coolfeedbackk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              @coolfeedbackk
            </a>
          </div>

          {/* Privacy Policy */}
          <div>
            <h3 className="text-xl font-bold mb-4">Политика конфиденциальности</h3>
            <div className="text-background/70 text-sm space-y-4">
              <p>
                Настоящая политика конфиденциальности регламентирует порядок сбора, обработки и хранения персональных данных пользователей сервиса CoolFeedback.
              </p>
              <p>
                <strong className="text-background">Собираемые данные:</strong> ФИО, номер телефона, ссылка на организацию в картографических сервисах. Данные используются исключительно для связи с клиентом и формирования заказа.
              </p>
              <p>
                <strong className="text-background">Гарантии:</strong> Мы гарантируем неразглашение персональных данных третьим лицам. Вся информация хранится в защищённом виде и используется только в рамках оказания услуг.
              </p>
            </div>
          </div>
        </div>

        {/* Consent block */}
        <div className="border-t border-background/10 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4">Согласие на обработку персональных данных</h3>
          <p className="text-background/70 text-sm leading-relaxed">
            Отправляя заявку через форму на сайте, вы даёте согласие на обработку персональных данных в соответствии с Федеральным законом №152-ФЗ «О персональных данных». Согласие может быть отозвано путём направления соответствующего запроса на контакт, указанный на сайте. Обработка данных осуществляется с целью исполнения договорных обязательств, связи с клиентом и улучшения качества сервиса.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © coolfeedback, 2024. Все права защищены.
          </p>
          <p className="text-background/50 text-sm">
            По всем вопросам:{" "}
            <a
              href="https://t.me/coolfeedbackk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background hover:underline"
            >
              Telegram @coolfeedbackk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
