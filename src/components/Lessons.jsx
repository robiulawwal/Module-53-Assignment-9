import { useLoaderData, useParams } from "react-router-dom";
import LessonCards from "./LessonCards";

const Lessons = () => {
  const lessonData = useLoaderData();
  const params = useParams();

  // Find the selected lesson based on the URL parameter
  const selectedLesson = lessonData.filter(
    (data) => data.lesson_no === parseInt(params.lesson_no)
  );

  
console.log(selectedLesson)

  return (
    <div className="container mx-auto p-6">
      {/* Lesson Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
          Lesson no : {parseInt(params.lesson_no)}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {selectedLesson.description}
        </p>
      </div>

      {/* Words Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {
            selectedLesson.map((word)=> <LessonCards word={word} key={word.id}></LessonCards>)
        }
      </div>
    </div>
  );
};

export default Lessons;