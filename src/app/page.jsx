import Link from 'next/link';

export const metadata = {
  title: "Welcome to RoastMe.AI 🔥 | The Gen-Z Roaster Bot",
  description: "The internet's favorite AI roaster. Get ready for some fun!",
  keywords: "AI roast, funny roast, Gen-Z, roast generator, RoastMe.AI",
};

const PublicRoastCard = ({ name, text }) => (
  <div className="card animate-fade-in">
    <p className="text-lg font-medium">"{text}"</p>
    <p className="text-sm text-gray-500 mt-2">- {name}</p>
    <p className="text-xs font-bold text-pink-500 mt-1">RoastMe.AI 🔥</p>
  </div>
);

export default function HomePage() {
  const publicRoasts = [
    { id: 1, name: "Jessica", text: "Your fashion sense is so unique, it's like you're not even trying to impress anyone. I respect that." },
    { id: 2, name: "Mike", text: "You look like you have a favorite brand of sparkling water. And you talk about it. A lot." },
    { id: 3, name: "Chloe", text: "Are you a magician? Because whenever you're around, my desire to be productive disappears." },
  ];

  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-transparent bg-clip-text">
          Welcome to RoastMe.AI
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          The only place on the internet where you can get a confidence boost by getting hilariously roasted by an AI.
        </p>
        <div className="mt-8">
          <Link href="/roastme.ai" className="btn btn-primary btn-lg">
            Get Roasted Now!
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          🔥 Latest Public Roasts 🔥
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {publicRoasts.map(roast => (
            <PublicRoastCard key={roast.id} name={roast.name} text={roast.text} />
          ))}
        </div>
      </section>
    </div>
  );
}