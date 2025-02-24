import { useLoaderData, useNavigate } from "react-router-dom";
import bgImage from "../assets/online-reading-concept-businessman-reading-book-online-vector.jpg";

const StartLearningPage = () => {
  const lessonCount = [
    { "lesson_no": 1, id: 1 },
    { "lesson_no": 2, id: 2 },
    { "lesson_no": 3, id: 3 },
    { "lesson_no": 4, id: 4 },
    { "lesson_no": 5, id: 5 },
    { "lesson_no": 6, id: 6 },
    { "lesson_no": 7, id: 7 },
    { "lesson_no": 8, id: 8 },
    { "lesson_no": 9, id: 9 },
    { "lesson_no": 10, id: 10 },
  ];
  const navigate = useNavigate();
  const data = useLoaderData();
  // console.log(data);

  const handleLessons = (lesson_no) => {
    console.log(lesson_no)
    navigate(`/lessons/${lesson_no}`)
  }

  return (
    <div className="container mx-auto my-18 w-11/12">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 text-center mb-8 drop-shadow-md">
        Let’s Learn Japanese - 日本語
      </h1>

      {/* Lesson Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-12">
        {lessonCount.map((lesson) => (

          <div onClick={() => handleLessons(lesson.lesson_no)}
            key={lesson.id}
            className="relative border border-purple-500 shadow-purple-300 rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="absolute inset-0 bg-purple-900/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center p-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              {/* Lesson Number */}
              <h2 className="text-2xl font-bold text-yellow-300 mb-2 drop-shadow-lg">
                Lesson {lesson.lesson_no}
              </h2>
              {/* Lesson Details */}
              <p className="text-white text-center text-lg drop-shadow-lg">
                Contains 10 words
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartLearningPage;
