import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LikeButton = () => {
  const [likes, setLikes] = useState(420);
  const [isLiked, setIsLiked] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedIsLiked = localStorage.getItem("websiteIsLiked");
    if (storedIsLiked === "true") {
      setIsLiked(true);
    }
  }, []);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
      localStorage.removeItem("websiteIsLiked");
    } else {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
      localStorage.setItem("websiteIsLiked", "true");
    }
  };

  if (!isClient) return null;

  return (
    <div className="flex items-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLike}
        className={`
          group relative w-40 h-10 flex items-center justify-center p-3
          rounded-full transition-colors duration-300 ease-in-out border-2
          ${isLiked
            ? "border-[var(--sec)] bg-[var(--sec)]/10"
            : "border-[var(--white-icon)] hover:border-[var(--white)]"
          }
        `}
      >
        <AnimatePresence mode="wait">
          {isLiked && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-full bg-[var(--sec)]/20"
            />
          )}
        </AnimatePresence>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          initial={false}
          animate={{
            scale: isLiked ? 1.1 : 1,
            color: isLiked ? "var(--sec)" : "var(--white-icon)"
          }}
          className={`w-6 h-6 transition-colors duration-300 ${!isLiked && "group-hover:text-[var(--white)]"}`}
        >
          <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path>
        </motion.svg>

        <motion.span
          key={likes}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-sm pl-3 font-medium text-[var(--white)]"
        >
          {likes} Likes
        </motion.span>
      </motion.button>
    </div>
  );
};

export default LikeButton;
