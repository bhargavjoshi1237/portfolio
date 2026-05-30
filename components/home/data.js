const ANIME_ALLEY_FEATURES = [
  "Social login (Google) with fully editable user profiles",
  "User-to-user follow system",
  "Real-time chat between users",
  "Personal anime lists with reviews",
  "User-generated forums with like & view counts",
  "Blog creation and personalized recommendations",
  "Advanced search with filters, plus SSR/SEO that ranks on Google",
];

const MANGA_FUSION_FEATURES = [
  "Add manga or light novels to a watchlist and get email alerts on price drops",
  "Compare prices for an entire manga / LN collection across major stores",
  "Profile system with partially editable widgets",
  "Recommendations based on in-app activity",
  "Search across titles and stores",
  "Web scraping pipeline aggregating data from major retailers",
];

const ZERO_MS_FEATURES = [
  "Real-time ping tests across databases, APIs, websites, and edge networks",
  "Customizable alerts with configurable thresholds",
  "Historical analytics and stress testing",
  "Multi-project management with client vs. multi-server comparisons",
  "Warm-up service and auto-pinger to eliminate cold starts",
  "Global edge KV caching for data acceleration",
  "Configurable on AWS and GCP",
];

export const FULL_PROJECTS = [
  {
    outerClassName:
      "relative w-[100%] md:w-[33.33%] h-full flex items-center border-[#e7e7e715] border-l absolute z-[9999]",
    triggerClassName:
      "w-[100%] md:w-[100%] h-full flex items-center border-[#e7e7e715] border-l absolute z-[9999]",
    title: "Anime Alley",
    triggerImg: "/aa.png",
    tagline:
      "Connects anime fans through a comprehensive platform offering social features, real-time discussions, content discovery, and robust user engagement tools.",
    desc2:
      "Personal lists, blogs, forums, and personalized recommendations based on extensive data.",
    bannerColor: "bg-red-500",
    bodyImg: "/aa.png",
    featuresTitle: "Total Features Implemented",
    featuresIntro: "around 12-15 features",
    features: ANIME_ALLEY_FEATURES,
    visitUrl: "https://animealley.vercel.app/",
  },
  {
    outerClassName:
      "relative w-[100%] md:w-[33.33%] h-full flex border-[#e7e7e715] border-l absolute z-[9999]",
    triggerClassName:
      "w-[100%] md:w-[100%] h-full flex items-start mt-7 border-[#e7e7e715] absolute z-[9999]",
    title: "Manga Fusion",
    triggerImg: "/mf.png",
    tagline:
      "Compares manga prices across major online stores, letting users track specific volumes and receive email alerts when prices drop.",
    bannerColor: "bg-orange-500",
    bodyImg: "/mf.png",
    featuresTitle: "Total Features Implemented",
    featuresIntro: "around 5-7 features",
    features: MANGA_FUSION_FEATURES,
    visitUrl: "https://mangafusion.vercel.app/",
  },
  {
    outerClassName:
      "relative border-r w-[100%] md:w-[33.33%] h-full flex border-[#e7e7e715] border-l absolute z-[9999]",
    triggerClassName:
      "w-[100%] md:w-[100%] h-full flex items-start mt-7 border-[#e7e7e715] absolute z-[9999]",
    title: "0ms - LAS",
    triggerImg: "/ms.png",
    tagline: "Latency Intelligence SaaS",
    desc2:
      "Real-time performance monitoring for digital infrastructure — databases, APIs, and edge networks — with customizable alerts, historical analytics, and stress testing.",
    bannerColor: "bg-green-500",
    bodyImg: "/ms.png",
    featuresTitle: "Total Features Implemented",
    featuresIntro: "around 12-15 features",
    features: ZERO_MS_FEATURES,
    visitUrl: "https://0ms.vercel.app/",
  },
  {
    outerClassName:
      "relative w-[100%] h-full flex items-center border-[#e7e7e715] border-l border-r absolute z-[9999]",
    triggerClassName:
      "w-[100%] h-full flex items-center border-[#e7e7e715] absolute z-[9999]",
    title: "Geiger Studio",
    triggerImg: "/geiger.svg",
    tagline:
      "A connected suite of products — Flow, Notes, Forms, Office, Dash, Assets, Canvas and Grey (AI) — built to help teams plan, create and collaborate in one place.",
    desc2: "Visit the studio to explore the full suite →",
    linkUrl: "https://geiger.studio/",
  },
];

export const FAQS = [
  {
    question: "What Is Your Education?",
    answer:
      "I completed my M.Tech (2026) at Parul University, building on a B.E. in IT Engineering from SVIT, Vasad (GTU, 2024) and a Diploma in Computer Engineering (8 CGPA) from Parul Polytechnic Institute (GTU).",
  },
  {
    question: "What Is Your Current Role?",
    answer:
      "I'm currently a Jr. Laravel Developer at Vardaam Web Solutions, working full-stack with React, Laravel, and SQL — plus hands-on work with RAG architecture, hosted LLM inference, and custom AI agents. I'm always open to new opportunities with interesting engineering challenges.",
  },
  {
    question: "What Is Your Experience?",
    answer:
      "I joined Vardaam Web Solutions as a full-stack intern (Jul–Dec 2025) and now work there as a Jr. Laravel Developer. Alongside that, I build my own products across the Node.js ecosystem with Next.js, Express, PostgreSQL, and Redis.",
  },
  {
    question: "How Are You In Communication?",
    answer:
      "I communicate with open-mindedness, active listening, and clear articulation. Beyond conveying technical details, I focus on building rapport, understanding project needs, and keeping everyone aligned — fostering collaborative environments, managing expectations, and maintaining professionalism throughout a project.",
  },
  {
    question: "What Are Your Projects Made By?",
    answer:
      "My projects showcase full-stack capability end to end — frontend, backend, and the integration between them. I'm comfortable choosing the right tools for each requirement, covering server-side rendering, interactive front-ends, data management, and leveraging cloud platforms for scalable backend services.",
  },
  {
    question: "Do You Work With AI / LLM Systems?",
    answer:
      "Yes. I work with AI tooling and LLM systems day to day — RAG pipelines, custom agents, model orchestration, and self-hosted / local inference (including GGUF models and hosted inference setups).",
  },
  {
    question: "Are You Down To Learn New Tech?",
    answer: "Absolutely — I move quickly across stacks and enjoy picking up new tools.",
  },
  {
    question: "Are You Open To Relocating?",
    answer:
      "I'm open to relocation depending on the role and company. I prioritize opportunities that align with my growth goals.",
  },
  {
    question: "How Many Languages Do You Speak?",
    answer: "I'm fluent in English, Hindi, Marathi, and Gujarati.",
  },
];

export const FOOTER_STATS = [
  { label: " Experience", value: " 1+ yr" },
  { label: " Projects Shipped", value: " 3+" },
  { label: " Publication", value: " 1" },
  { label: " Core Stacks", value: " Node + Laravel" },
  { label: " Cloud", value: " AWS · GCP" },
  { label: " Languages", value: " 4" },
  { label: " Based In", value: " Vadodara" },
];
