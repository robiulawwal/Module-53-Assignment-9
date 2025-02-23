import CountUp from 'react-countup';

const SuccessSection = () => {
  return (
    <div className="py-12 mt-10 bg-gradient-to-b from-white to-green-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Our Success in Numbers
          </h2>
          <p className="text-lg md:text-xl text-green-800 max-w-2xl mx-auto">
            Join thousands of learners who have transformed their language skills with Lingo Bingo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {/* User Count */}
          <div className="bg-blue-50 p-2 md:p-3 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center">
            <div className="text-blue-600 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.042 12.042 0 01-12.317 0L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.13 10.5L12 15.5l7.87-4.966A12.042 12.042 0 0120.16 9.5L12 14.5 4.13 9.5a12.042 12.042 0 000 1z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-green-900 mb-1">Users</h3>
            <p className="text-3xl md:text-4xl font-bold text-blue-500">
              <CountUp end={1500} duration={6} separator="," />
            </p>
          </div>

          {/* Lesson Count */}
          <div className="bg-red-50 p-2 md:p-3 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center">
            <div className="text-red-600 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v18l7-5.5L19 21V3z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-green-900 mb-1">Lessons</h3>
            <p className="text-3xl md:text-4xl font-bold text-red-500">
              <CountUp end={120} duration={6} separator="," />
            </p>
          </div>

          {/* Vocabulary Count */}
          <div className="bg-yellow-50 p-2 md:p-3 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center">
            <div className="text-yellow-600 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-green-900 mb-1">Vocabularies</h3>
            <p className="text-3xl md:text-4xl font-bold text-yellow-400">
              <CountUp end={3000} duration={6} separator="," />
            </p>
          </div>

          {/* Tutorial Count */}
          <div className="bg-purple-50 p-2 md:p-3 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center">
            <div className="text-purple-600 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18V5a2 2 0 012-2 2 2 0 012 2v13" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-green-900 mb-1">Tutorials</h3>
            <p className="text-3xl md:text-4xl font-bold text-purple-500">
              <CountUp end={45} duration={6} separator="," />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
