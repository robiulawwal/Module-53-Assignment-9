
import { motion } from 'framer-motion';

const AboutSection = () => {
  const leftCardVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const middleCardVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  return (
    <div className="py-12 bg-gradient-to-t overflow-hidden from-white to-purple-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            About Lingo Bingo
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
            At Lingo Bingo, we transform language learning into a fun and engaging experience. 
            Our mission is to help you master new vocabularies effortlessly while connecting 
            with a global community of learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1: Learn With Learners */}
          <motion.div
            variants={leftCardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-200"
          >
            <div className="text-cyan-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Learn With Learners</h3>
            <p className="text-gray-700">
              Connect with learners worldwide, share your progress, and achieve your 
              language goals together.
            </p>
          </motion.div>

          {/* Card 2: How It Works */}
          <motion.div
  variants={middleCardVariants}
  initial="hidden"
  animate="visible"
  whileHover={{ scale: 1.05 }}
  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-200"
>
  <div className="text-pink-600 mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  </div>
  <h3 className="text-2xl font-bold text-purple-900 mb-4">Learn Japanese -日本語</h3>
  <p className="text-gray-700">
    Dive into interactive lessons, practice with real-life examples, and track your 
    progress.
  </p>
</motion.div>


          {/* Card 3: Vocabulary Learning */}
          <motion.div
            variants={rightCardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-200"
          >
            <div className="text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h2l3-9 9 18-3-9h-2l3-9-9 18-3-9z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Learn Vocabularies</h3>
            <p className="text-gray-700">
              Engage in fun activities like flashcards, quizzes, and interactive games to 
              master new words and phrases effectively.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
