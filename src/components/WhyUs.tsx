import { Shield, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Конфиденциальность",
    description: "Ваши данные в полной безопасности. Мы не передаём информацию третьим лицам.",
  },
  {
    icon: Clock,
    title: "Стабильность",
    description: "Отзывы публикуются постепенно для максимальной естественности и надёжности.",
  },
  {
    icon: BarChart3,
    title: "Полный контроль",
    description: "Вы получаете отчёты о каждой опубликованной записи прямо в Telegram.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CoolFeedback — это{" "}
            <span className="text-gradient-primary">выгодно и безопасно</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Почему сотни компаний выбирают наш сервис для продвижения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elevated text-center group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
