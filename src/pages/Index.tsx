import HeroSection from "@/components/HeroSection";
import WhatIsDercas from "@/components/WhatIsDercas";
import DercasCards from "@/components/DercasCards";
import PracticalExample from "@/components/PracticalExample";
import MiniQuiz from "@/components/MiniQuiz";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <WhatIsDercas />
      <DercasCards />
      <PracticalExample />
      <MiniQuiz />
      <Conclusion />
    </main>
  );
};

export default Index;
