import { MessageSquare } from "lucide-react";

const Header = () => {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CF</span>
            </div>
            <span className="font-bold text-xl">
              cool<span className="text-gradient-primary">feedback</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#calculator" className="text-muted-foreground hover:text-foreground transition-colors">
              Калькулятор
            </a>
            <a href="#privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
              О сервисе
            </a>
            <a
              href="https://t.me/coolfeedbackk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Telegram
            </a>
          </nav>

          {/* CTA */}
          <button onClick={scrollToCalculator} className="btn-primary text-sm">
            Заказать отзывы
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
