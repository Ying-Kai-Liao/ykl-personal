// One list drives the home carousel and the projects page. Plain words; numbers live on GitHub.
export interface Project {
  slug: string;
  name: string;
  line: string;
  status: string;
  links: { label: string; href: string }[];
  story: string[];
}

export const projects: Project[] = [
  {
    slug: "jev",
    name: "jev-browser",
    line: "A browser agent that does the clicking, and asks before anything it can't undo.",
    status: "Open source, 2026",
    links: [{ label: "GitHub", href: "https://github.com/Ying-Kai-Liao/jev-browser" }],
    story: [
      "Browser agents are good at clicking and bad at knowing when to stop. jev-browser splits the job: a large model plans the steps, a small fast model picks each click, and a browser carries it out.",
      "Before any step that can't be undone, like placing an order, it stops and asks you first. It works as a library, from the command line, or inside other AI tools.",
    ],
  },
  {
    slug: "crew",
    name: "orca-flow",
    line: "How I build: a crew of coding agents working overnight, with one queue that merges.",
    status: "Open source, 2026",
    links: [{ label: "GitHub", href: "https://github.com/Ying-Kai-Liao/orca-flow" }],
    story: [
      "When several coding agents work on one codebase at once, they trip over each other. orca-flow gives each agent its own copy of the code and a single queue that is the only thing allowed to merge and ship.",
      "It's how I run most of my projects now: planners hand out tasks, agents open pull requests, and the queue checks and lands them one at a time, often while I sleep.",
    ],
  },
  {
    slug: "behalve",
    name: "Behalve",
    line: "An AI staff member for small businesses. In progress.",
    status: "In progress",
    links: [],
    story: [
      "An AI staff member for small service businesses like salons, studios and clinics. It answers customers on WhatsApp, LINE, Instagram, SMS, email and voice.",
      "Owners coach it the way they would coach a new hire, and every change it makes to itself is visible and can be undone.",
    ],
  },
  {
    slug: "storm",
    name: "Storm",
    line: "Chat with AI as a mind map, so ideas branch instead of scrolling away.",
    status: "Live product",
    links: [{ label: "stormai.dev", href: "https://www.stormai.dev" }],
    story: [
      "AI chat on a canvas. Instead of one long thread, any message can branch into its own conversation, and each branch only remembers its own path.",
      "You can bring in an old ChatGPT history and Storm turns it into a map you can keep exploring.",
    ],
  },
  {
    slug: "convoy",
    name: "Outer Convoy",
    line: "Helping people who moved to Australia later in life find groups that want their skills.",
    status: "Research pilot, 2026",
    links: [],
    story: [
      "An AI guide for people who moved to Australia after 60, helping them find community groups that want their skills and time.",
      "It only suggests organisations it can verify, shows where each suggestion came from, and says so plainly when nothing fits. The language model explains; ordinary code decides who qualifies.",
    ],
  },
];

export const earlier = [
  { name: "PemoChart (攀木科技)", line: "The startup I founded in Taiwan, awarded at the U-start Plan accelerator." },
  { name: "Skin cancer report system", line: "A multimodal report and recommendation system for skin cancer diagnosis." },
  { name: "Fashion recommender", line: "Clothing recommendations learned from H&M purchase history." },
  { name: "hot-seat", line: "Put a product idea in the hot seat and let AI advisors grill it.", href: "https://github.com/Ying-Kai-Liao/hot-seat" },
];
