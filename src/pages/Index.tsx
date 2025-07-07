import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const artists = [
    {
      name: "Travis Scott",
      genre: "Hip-Hop",
      image: "/img/dbf954f6-931d-46a4-b69e-d26b78383e39.jpg",
    },
    {
      name: "Kendrick Lamar",
      genre: "Rap",
      image: "/img/1b02c1b3-795b-495b-82cf-3645e51402c2.jpg",
    },
    {
      name: "Drake",
      genre: "Hip-Hop",
      image: "/img/dd24f37c-5885-49c0-b775-c8e480ec3a84.jpg",
    },
  ];

  const posterCatalog = [
    {
      id: 1,
      artist: "Travis Scott",
      title: "Astroworld",
      price: "2,500₽",
      image: "/img/dbf954f6-931d-46a4-b69e-d26b78383e39.jpg",
    },
    {
      id: 2,
      artist: "Kendrick Lamar",
      title: "DAMN.",
      price: "3,000₽",
      image: "/img/1b02c1b3-795b-495b-82cf-3645e51402c2.jpg",
    },
    {
      id: 3,
      artist: "Drake",
      title: "Scorpion",
      price: "2,200₽",
      image: "/img/dd24f37c-5885-49c0-b775-c8e480ec3a84.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 bg-[url('/img/dbf954f6-931d-46a4-b69e-d26b78383e39.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            KRASK
            <span className="text-primary block text-4xl md:text-5xl font-light">
              POSTERS
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Эксклюзивные постеры западных рэп-исполнителей для истинных
            ценителей музыки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Смотреть каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              Заказать постер
            </Button>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Артисты</h2>
            <p className="text-xl text-muted-foreground">
              Лучшие представители рэп-сцены
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      {artist.genre}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Каталог постеров
            </h2>
            <p className="text-xl text-muted-foreground">
              Премиальные постеры для вашего интерьера
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posterCatalog.map((poster) => (
              <Card
                key={poster.id}
                className="bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {poster.price}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{poster.artist}</h3>
                    <p className="text-muted-foreground mb-4">{poster.title}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Заказать постер
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Свяжитесь с нами для индивидуального заказа
          </p>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Ваше имя"
                    className="bg-background border-border"
                  />
                  <Input
                    placeholder="Телефон"
                    className="bg-background border-border"
                  />
                </div>
                <Input
                  placeholder="Email"
                  className="bg-background border-border"
                />
                <Input
                  placeholder="Какой артист интересует?"
                  className="bg-background border-border"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заказ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">KRASK</h3>
              <p className="text-muted-foreground">
                Эксклюзивные постеры рэп-исполнителей для истинных ценителей
                музыки
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@krask.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  size={24}
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                />
                <Icon
                  name="Twitter"
                  size={24}
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                />
                <Icon
                  name="Facebook"
                  size={24}
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 KRASK POSTERS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
