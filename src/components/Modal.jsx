import PropTypes from "prop-types";

const Modal = ({ word }) => {
  return (
    <dialog id={`my_modal_${word.id}`} className="modal">
      <div className="modal-box bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 rounded-xl shadow-2xl p-8">
        {/* Modal Header */}
        <h3 className="text-4xl font-bold text-purple-800 mb-6 text-center">
          {word.word}
        </h3>

        {/* Pronunciation and Meaning */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <span className="font-bold text-purple-700">Pronunciation:</span>{" "}
            {word.pronunciation}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-purple-700">Meaning:</span>{" "}
            {word.meaning}
          </p>
        </div>

        {/* When to Say */}
        <div className="mt-8">
          <h4 className="text-2xl font-bold text-purple-700 mb-3">When to Say</h4>
          <p className="text-gray-700 text-lg">{word.when_to_say}</p>
        </div>

        {/* Example */}
        <div className="mt-8">
          <h4 className="text-2xl font-bold text-purple-700 mb-3">Example</h4>
          <p className="text-gray-700 text-lg italic">
            {`"${word.example}"`}
          </p>
        </div>

        {/* Close Button */}
        <div className="modal-action mt-10">
          <form method="dialog" className="w-full">
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-md text-lg font-semibold">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

Modal.propTypes = {
  word: PropTypes.object.isRequired,
};

export default Modal;