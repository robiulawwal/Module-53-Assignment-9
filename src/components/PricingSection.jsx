
const PricingSection = () => {
    return (
        <div className="my-8 lg:my-14">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                    Pricing Plans
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                    Choose the perfect plan to start your language learning journey with Lingo Bingo.
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {/* Plan 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-gray-200 rounded-xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">Basic</h3>
                    <p className="text-gray-700 mb-6">Perfect for beginners</p>
                    <p className="text-4xl font-bold text-purple-700 mb-6">
                        $9.99<span className="text-lg text-gray-600">/month</span>
                    </p>
                    <ul className="text-gray-700 mb-6">
                        <li className="mb-2">✅ 10 Lessons</li>
                        <li className="mb-2">✅ Basic Vocabulary</li>
                        <li className="mb-2">✅ Email Support</li>
                    </ul>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-md">
                        Get Started
                    </button>
                </div>

                {/* Plan 2 - Highlighted */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-white">
                    <h3 className="text-2xl font-bold mb-4">Pro</h3>
                    <p className="mb-6">For serious learners</p>
                    <p className="text-4xl font-bold mb-6">
                        $19.99<span className="text-lg opacity-80">/month</span>
                    </p>
                    <ul className="mb-6">
                        <li className="mb-2">✅ 50 Lessons</li>
                        <li className="mb-2">✅ Advanced Vocabulary</li>
                        <li className="mb-2">✅ Priority Support</li>
                    </ul>
                    <button className="w-full bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg transition duration-300 shadow-md">
                        Get Started
                    </button>
                </div>

                {/* Plan 3 */}


                <div className="transition duration-300 transform hover:scale-105 bg-white bg-opacity-90 bg-gradient-to-br from-pink-200 to-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl overflow-hidden group">

                    <div className="">
                        <h3 className="text-2xl font-bold text-pink-700 mb-4">Premium</h3>
                        <p className="text-gray-700 mb-6">For language enthusiasts</p>
                        <p className="text-4xl font-bold text-pink-700 mb-6">$29.99<span className="text-lg text-gray-600">/month</span></p>
                        <ul className="text-gray-700 mb-6">
                            <li className="mb-2">✅ Unlimited Lessons</li>
                            <li className="mb-2">✅ Expert Tutors</li>
                            <li className="mb-2">✅ 24/7 Support</li>
                        </ul>
                        <button className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-md">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
