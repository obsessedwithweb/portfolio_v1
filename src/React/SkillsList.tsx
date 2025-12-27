import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CategoryIcons = {
  "Full Stack Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-[var(--sec)]"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "Backend Engineering": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-[var(--sec)]"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  "Database Management": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-[var(--sec)]"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Full Stack Development": [
      "Building scalable web applications from scratch using Next.js and React.",
      "Creating responsive and interactive user interfaces with Tailwind CSS.",
      "Implementing secure authentication and authorization systems.",
      "Optimizing application performance for speed and SEO.",
    ],
    "Backend Engineering": [
      "Designing robust APIs with Node.js, Elysia, and Django.",
      "Managing server-side logic and database interactions.",
      "Implementing real-time features using WebSockets.",
      "Ensuring data security and integrity.",
    ],
    "Database Management": [
      "Designing efficient database schemas with PostgreSQL and MySQL.",
      "Using ORMs like Prisma and Drizzle for type-safe database access.",
      "Optimizing queries for high-performance data retrieval.",
      "Managing database migrations and backups.",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6 mb-4">
        My Expertise
      </h3>
      <p className="text-[var(--white-icon)] mb-8 text-sm md:text-base max-w-md">
        I specialize in building high-quality web applications with a focus on performance, scalability, and user experience.
      </p>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <motion.div
              layout
              onClick={() => toggleItem(category)}
              className={`md:w-[400px] w-full rounded-2xl text-left transition-all border cursor-pointer overflow-hidden ${openItem === category
                ? "bg-[var(--white-icon-tr)] border-[var(--sec)] shadow-[0_0_15px_rgba(164,118,255,0.15)]"
                : "bg-[#1414149c] border-[var(--white-icon-tr)] hover:border-[var(--white-icon)]"
                }`}
            >
              <div className="flex items-center gap-3 p-4">
                <div className={`p-2 rounded-lg ${openItem === category ? "bg-[var(--sec)]/10" : "bg-transparent"}`}>
                  {CategoryIcons[category as keyof typeof CategoryIcons]}
                </div>
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <span className={`block font-medium text-lg ${openItem === category ? "text-[var(--sec)]" : "text-[var(--white)]"}`}>
                    {category}
                  </span>
                  <motion.div
                    animate={{ rotate: openItem === category ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-5 h-5 ${openItem === category ? "text-[var(--sec)]" : "text-[var(--white-icon)]"}`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {openItem === category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-4"
                  >
                    <ul className="space-y-3 pb-6 text-[var(--white-icon)] text-sm border-t border-[var(--white-icon-tr)] pt-4 mt-2">
                      {items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-[var(--sec)] mt-1.5 text-xs">●</span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
