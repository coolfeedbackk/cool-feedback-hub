import { Star, TrendingUp, MessageSquare } from "lucide-react";

const Hero = () => {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm animate-slide-up">
              <Star className="w-4 h-4 fill-primary" />
              <span>Проверенный сервис отзывов</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-slide-up animation-delay-100">
              Увеличьте доверие к{" "}
              <span className="text-gradient-primary">вашему бизнесу</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-slide-up animation-delay-200">
              Настоящие отзывы на Яндекс.Картах и 2ГИС, которые работают на вас. 
              <span className="text-foreground font-medium"> Быстро. Надежно. Результативно.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
              <button onClick={scrollToCalculator} className="btn-cta text-lg">
                Рассчитать стоимость
              </button>
              <a 
                href="https://t.me/coolfeedbackk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-border bg-card hover:bg-secondary transition-colors font-semibold"
              >
                <MessageSquare className="w-5 h-5" />
                Написать в Telegram
              </a>
            </div>
          </div>
          
          {/* Visual element */}
          <div className="relative hidden lg:block animate-slide-up animation-delay-400">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="card-elevated p-8 w-full max-w-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">+127%</div>
                      <div className="text-muted-foreground text-sm">Рост доверия</div>
                    </div>
                  </div>
                  
                  {/* Stars row */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow text-yellow" />
                    ))}
                  </div>
                  
                  {/* Progress bars */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground w-8">5★</span>
                      <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                        <div className="h-full w-[85%] gradient-cta rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground w-8">4★</span>
                      <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                        <div className="h-full w-[12%] gradient-primary rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground w-8">3★</span>
                      <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                        <div className="h-full w-[3%] bg-muted-foreground/30 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 card-elevated !p-4 animate-float">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow text-yellow" />
                  <span className="font-bold">4.9</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 card-elevated !p-4 animate-float animation-delay-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full gradient-cta flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-sm">+24 отзыва</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
