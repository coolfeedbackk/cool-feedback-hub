import { useState, useCallback } from "react";
import { Camera, Send, MapPin, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Platform = "yandex" | "2gis";

const PRICES = {
  yandex: 500,
  "2gis": 400,
  photo: 50,
};

const Calculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    link: "",
  });
  const [platform, setPlatform] = useState<Platform>("yandex");
  const [quantity, setQuantity] = useState(5);
  const [withPhoto, setWithPhoto] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const basePrice = platform === "yandex" ? PRICES.yandex : PRICES["2gis"];
  const photoPrice = withPhoto ? PRICES.photo * quantity : 0;
  const totalPrice = basePrice * quantity + photoPrice;

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 1) return numbers.length === 1 ? `+${numbers}` : "";
    if (numbers.length <= 4) return `+${numbers.slice(0, 1)} (${numbers.slice(1)}`;
    if (numbers.length <= 7) return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
    if (numbers.length <= 9) return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`;
    return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const scrollToPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("privacy-policy")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreed) {
      toast({
        title: "Внимание",
        description: "Необходимо согласиться с обработкой персональных данных",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.phone || !formData.link) {
      toast({
        title: "Внимание",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const platformName = platform === "yandex" ? "Яндекс.Карты" : "2ГИС";
    const photoOption = withPhoto ? "С фото" : "Без фото";
    
    const message = `📩 НОВАЯ ЗАЯВКА 📩
👤 ФИО: ${formData.name}
📞 Телефон: ${formData.phone}
🔗 Ссылка: ${formData.link}
📦 Пакет: ${quantity} отзывов (${platformName})
📸 Опция: ${photoOption}
💰 Итоговая сумма: ${totalPrice.toLocaleString("ru-RU")}₽`;

    // Telegram Bot API
    const botToken = "YOUR_BOT_TOKEN"; // Replace with actual bot token
    const chatId = "@coolfeedbackk";
    
    try {
      // For now, we'll open Telegram directly since we don't have the bot token configured
      const telegramUrl = `https://t.me/coolfeedbackk?text=${encodeURIComponent(message)}`;
      window.open(telegramUrl, "_blank");
      
      toast({
        title: "Заявка готова!",
        description: "Отправьте сообщение в открывшемся окне Telegram",
      });
      
      // Reset form
      setFormData({ name: "", phone: "", link: "" });
      setQuantity(5);
      setWithPhoto(false);
      setAgreed(false);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Калькулятор <span className="text-gradient-primary">заказа</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Рассчитайте стоимость отзывов за несколько секунд и оставьте заявку
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card-elevated !p-8 space-y-6">
            {/* Personal info */}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше ФИО
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Иванов Иван Иванович"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Ваш номер телефона
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (999) 123-45-67"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="link" className="block text-sm font-medium mb-2">
                  Ссылка на ваш продукт/организацию
                </label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  placeholder="https://yandex.ru/maps/org/..."
                  className="input-field"
                  required
                />
              </div>
            </div>

            {/* Platform selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium">
                Выберите платформу
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPlatform("yandex")}
                  className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                    platform === "yandex"
                      ? "border-primary bg-primary/5 shadow-glow"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <MapPin className={`w-5 h-5 ${platform === "yandex" ? "text-primary" : "text-muted-foreground"}`} />
                  <div className="text-left">
                    <div className={`font-semibold ${platform === "yandex" ? "text-primary" : ""}`}>
                      Яндекс.Карты
                    </div>
                    <div className="text-sm text-muted-foreground">500₽ / отзыв</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatform("2gis")}
                  className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                    platform === "2gis"
                      ? "border-primary bg-primary/5 shadow-glow"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Building2 className={`w-5 h-5 ${platform === "2gis" ? "text-primary" : "text-muted-foreground"}`} />
                  <div className="text-left">
                    <div className={`font-semibold ${platform === "2gis" ? "text-primary" : ""}`}>
                      2ГИС
                    </div>
                    <div className="text-sm text-muted-foreground">400₽ / отзыв</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Quantity slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium">
                  Количество отзывов
                </label>
                <div className="text-2xl font-bold text-gradient-primary">
                  {quantity}
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1 отзыв</span>
                <span>50 отзывов</span>
              </div>
            </div>

            {/* Photo option */}
            <button
              type="button"
              onClick={() => setWithPhoto(!withPhoto)}
              className={`w-full flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                withPhoto
                  ? "border-yellow bg-yellow/10"
                  : "border-border hover:border-yellow/50"
              }`}
            >
              <Camera className={`w-6 h-6 ${withPhoto ? "text-yellow" : "text-muted-foreground"}`} />
              <span className={`font-semibold ${withPhoto ? "text-foreground" : "text-muted-foreground"}`}>
                Фото к отзывам +50₽/шт
              </span>
              {withPhoto && (
                <span className="ml-auto text-sm font-medium text-yellow">
                  +{(PRICES.photo * quantity).toLocaleString("ru-RU")}₽
                </span>
              )}
            </button>

            {/* Total */}
            <div className="bg-secondary/50 rounded-2xl p-6 text-center">
              <div className="text-sm text-muted-foreground mb-1">К оплате</div>
              <div className="text-4xl font-extrabold text-gradient-primary">
                {totalPrice.toLocaleString("ru-RU")} ₽
              </div>
            </div>

            {/* Agreement */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="agreement" className="text-sm text-muted-foreground cursor-pointer">
                Я согласен на обработку{" "}
                <a
                  href="#privacy-policy"
                  onClick={scrollToPrivacy}
                  className="text-primary hover:underline"
                >
                  персональных данных
                </a>
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={!agreed || isSubmitting}
              className="btn-cta w-full flex items-center justify-center gap-3 text-lg"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Отправить заявку
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
