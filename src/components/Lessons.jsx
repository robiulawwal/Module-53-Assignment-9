import { Link, useLoaderData, useParams } from "react-router-dom";
import LessonCards from "./LessonCards";

const Lessons = () => {
  const lessonData = useLoaderData();
  const params = useParams();

  // Find the selected lesson based on the URL parameter
  const selectedLesson = lessonData.filter(
    (data) => data.lesson_no === parseInt(params.lesson_no)
  );

  return (
    <div className="container mx-auto my-4">
      {/* Lesson Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
          Lesson no : {parseInt(params.lesson_no)}
        </h1>
      </div>

      {/* Words Grid */}
      <div className="overflow-hidden grid grid-cols-1 w-11/12 mx-auto md:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pb-7">
        {
          selectedLesson.map((word ,idx) => <LessonCards word={word} key={idx}></LessonCards>)
        }
      </div>
      <div className="flex justify-center">
        <Link to="/start-learning"><button className="my-3 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white px-10 py-4 rounded-lg transition duration-300 shadow-md ">
        Back to Lesson
        </button></Link>
      </div>
    </div>
  );
};

export default Lessons;