export type TechCategory = {
  category: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
  { category: "Backend", items: ["Python", "Flask", "Streamlit"] },
  { category: "AI", items: ["OpenAI", "Claude", "Dify"] },
  { category: "API", items: ["Google API", "LINE API"] },
  { category: "Deploy", items: ["GitHub", "Vercel", "Netlify", "Render"] },
];
