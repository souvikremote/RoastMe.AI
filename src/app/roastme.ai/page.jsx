import RoastMeAI from "@/components/RoastMeAI";

export const metadata = {
  title: "RoastMe.AI Tool 🔥 | Let the Roasting Begin!",
  description: "Upload your selfie and get roasted by our AI. It's all in good fun!",
  keywords: "AI roast, funny roast, Gen-Z, roast generator, RoastMe.AI",
};

export default function RoastPage() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-transparent bg-clip-text">
          The Roast Chamber
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Ready to question your life choices? Upload a selfie and let our AI do its worst.
        </p>
      </div>
      <RoastMeAI />
    </section>
  );
}