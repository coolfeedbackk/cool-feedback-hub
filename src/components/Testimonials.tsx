import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Александр М.",
    role: "Владелец автосервиса",
    text: "Обращался несколько раз. Всегда всё чётко по договорённостям. Отзывы пишутся стабильно раз в неделю, как я и просил. Результатом доволен.",
    rating: 5,
  },
  {
    name: "Елена К.",
    role: "Директор кафе",
    text: "Цена/качество на уровне. Все отчёты приходят в Telegram, всегда на связи. Рекомендую!",
    rating: 5,
  },
  {
    name: "Михаил В.",
    role: "Предприниматель",
    text: "Спасибо за работу! Видно, что подход профессиональный. Не просто «накрутка», а грамотное ведение.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нам <span className="text-gradient-primary">доверяют</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Отзывы наших клиентов говорят сами за себя
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
