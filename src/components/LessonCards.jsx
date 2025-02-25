import PropTypes from "prop-types";
import { FaBook, FaStar, FaChartLine } from "react-icons/fa"; // Icons for difficulty levels
import Modal from "./Modal";

const LessonCards = ({ word }) => {
    const speakWord = (wordJp) => {
        const utterance = new SpeechSynthesisUtterance(wordJp);
        utterance.lang = "ja-JP"; // Japanese
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div
            onClick={(e) => { 
                if(!e.target.closest('.modal, .modal *')) {
                    speakWord(word.word);
                }
            }}
            className={`rounded-xl cursor-pointer relative p-6 hover:shadow-2xl duration-300 flex flex-col gap-2 shadow-lg ${word.difficulty === "easy"
                    ? "bg-gradient-to-br from-green-100 to-white border-2 border-green-200"
                    : word.difficulty === "medium"
                        ? "bg-gradient-to-br from-yellow-100 to-white border-2 border-yellow-200"
                        : "bg-gradient-to-br from-red-100 to-white border-2 border-red-200"
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
                    className={`text-xs font-semibold px-2 py-1 rounded-full border ${word.difficulty === "easy"
                            ? "text-green-600 bg-green-100 border-green-400"
                            : word.difficulty === "medium"
                                ? "text-yellow-600 bg-yellow-100 border-yellow-400"
                                : "text-red-600 bg-red-100 border-red-400"
                        }`}
                >
                    {word.difficulty}
                </span>
            </p>

            {/* "When to Say" Button */}
            <div className="mt-auto">
                <button
                    onClick={() => {

                        document.getElementById(`my_modal_${word.id}`).showModal(); // Use dynamic modal ID
                    }}
                    className={`w-full px-4 py-2 rounded-lg hover:shadow-xl border-2 transition duration-300 shadow-md ${word.difficulty === "easy"
                            ? "text-green-800 hover:bg-green-300 bg-green-100 border-green-400"
                            : word.difficulty === "medium"
                                ? "text-yellow-800 bg-yellow-100 hover:bg-yellow-300 border-yellow-400"
                                : "text-red-800 bg-red-100 hover:bg-red-300 border-red-400"
                        }`}
                >
                    When to Say
                </button>
            </div>

            {/* Modal */}
            <Modal word={word} />
        </div>
    );
};

LessonCards.propTypes = {
    word: PropTypes.object,
};

export default LessonCards;