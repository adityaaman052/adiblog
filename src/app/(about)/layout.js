import InsightRoll from "@/components/About/InsightRoll"


const insights = [
  "GDG Hackathon Winner 🏆",
  "Developed full-stack projects, including a crowdfunding platform & mess management system",
  "Experience in MERN & Next.js with backend integration",
  "Expertise in authentication, payment gateways & API development",
  "Built an edtech platform for a hackathon",
  "Integrated Python AI features into web projects",
  "Completed an internship on payment integration with kiosks",
  "Open-source contributor with projects on GitHub",
];


export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between mt-24">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
