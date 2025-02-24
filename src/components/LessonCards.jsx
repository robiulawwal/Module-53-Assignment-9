import PropTypes from "prop-types";
import { FaBook, FaStar, FaChartLine } from "react-icons/fa"; // Icons for difficulty levels

const LessonCards = ({ word }) => {

    return (
        <div
            className={`rounded-xl relative p-6 flex flex-col gap-2 shadow-lg  hover:shadow-2xl transition-shadow duration-300 ${word.difficulty === "easy"
                ? "bg-gradient-to-br from-green-100 hover:shadow-green-200 to-white border-2 border-green-200"
                : word.difficulty === "medium"
                    ? "bg-gradient-to-br from-yellow-100 hover:shadow-yellow-100 to-white border-2 border-yellow-200"
                    : "bg-gradient-to-br hover:shadow-red-200 from-red-100 to-white border-2 border-red-200"
                }`}
        >

            {/* Icon for Difficulty */}
            <div className="flex items-center justify-center mb-2">
                {word.difficulty === "easy" && <FaBook className="w-8 h-8 text-green-600" />}
                {word.difficulty === "medium" && <FaStar className="w-8 h-8 text-yellow-600" />}
                {word.difficulty === "difficult" && <FaChartLine className="w-8 h-8 text-red-600" />}
            </div>

            {/* Word Information */}
            <h2 className="text-xl font-bold mb-1 text-center">
                {word.difficulty === "easy"
                    ? <span className="text-green-800">{word.word}</span>
                    : word.difficulty === "medium"
                        ? <span className="text-yellow-800">{word.word}</span>
                        : <span className="text-red-800">{word.word}</span>}
            </h2>
            <p className="text-gray-600 text-xl"><span className="font-bold">pronunciation:</span> {word.pronunciation}</p>
            <p className="text-gray-600 text-xl"><span className="font-bold">Meaning: </span>{word.meaning}</p>
            <p className="text-gray-600 text-xl"><span className="font-bold">Part of Speech:</span> {word.part_of_speech}</p>
            <p className="text-sm mb-4 absolute top-4 right-0 rotate-45">
                <span
                    className={` text-xs font-semibold px-2 py-1 rounded-full border ${word.difficulty === "easy" ? "text-green-600 bg-green-100 border-green-400" : word.difficulty === "medium" ? "text-yellow-600 bg-yellow-100 border-yellow-400" : "text-red-600 bg-red-100 border-red-400"
                        }`} >
                    {word.difficulty}
                </span>
            </p>

            {/* "When to Say" Button */}
            <div className="mt-auto">
                <button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow-md"
                    onClick={() => alert(`When to say: ${word.when_to_say}\nExample: ${word.example}`)}
                >
                    When to Say
                </button>
            </div>
        </div>
    );
};
LessonCards.propTypes = {
    word: PropTypes.object
}
export default LessonCards;