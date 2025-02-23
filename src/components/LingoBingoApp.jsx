

// const LingoBingoApp = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-900 font-sans">
//       {/* Header */}
//       <header className="p-6 bg-white bg-opacity-90 backdrop-blur-md shadow-lg">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-3xl font-bold text-purple-700 hover:text-purple-600 transition duration-300 cursor-pointer">
//             Lingo Bingo
//           </div>
//           <nav className="flex space-x-6">
//             <a href="#" className="text-lg text-gray-700 hover:text-purple-700 transition duration-300">
//               Home
//             </a>
//             <a href="#" className="text-lg text-gray-700 hover:text-purple-700 transition duration-300">
//               Start Learning
//             </a>
//             <a href="#" className="text-lg text-gray-700 hover:text-purple-700 transition duration-300">
//               Tutorials
//             </a>
//             <a href="#" className="text-lg text-gray-700 hover:text-purple-700 transition duration-300">
//               About Us
//             </a>
//           </nav>
//           <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
//             Login
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-8">
//         {/* Hero Section */}
//         <section className="text-center py-20">
//           <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-700">
//             Welcome to Lingo Bingo!
//           </h1>
//           <p className="text-xl text-gray-700 mb-8">
//             Learn new vocabulary in a fun and interactive way.
//           </p>
//           <button className="bg-pink-700 hover:bg-pink-800 text-white px-8 py-3 rounded-lg text-lg transition duration-300 shadow-md">
//             Get Started
//           </button>
//         </section>

//         {/* About Section */}
//         <section className="py-12">
//           <h2 className="text-4xl font-bold text-purple-700 mb-8">About Us</h2>
//           <p className="text-gray-700 mb-8">
//             At Lingo Bingo, we are passionate about helping you learn new languages in a fun and engaging way. Our mission is to make language learning accessible and enjoyable for everyone.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl border border-purple-100 hover:border-purple-300 transition duration-300 shadow-lg hover:shadow-xl">
//               <h3 className="text-2xl font-bold text-purple-700 mb-4">User Count</h3>
//               <p className="text-gray-700">10,000+</p>
//             </div>
//             <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl border border-purple-100 hover:border-purple-300 transition duration-300 shadow-lg hover:shadow-xl">
//               <h3 className="text-2xl font-bold text-purple-700 mb-4">Lesson Count</h3>
//               <p className="text-gray-700">50+</p>
//             </div>
//             <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl border border-purple-100 hover:border-purple-300 transition duration-300 shadow-lg hover:shadow-xl">
//               <h3 className="text-2xl font-bold text-purple-700 mb-4">Vocabulary Count</h3>
//               <p className="text-gray-700">500+</p>
//             </div>
//           </div>
//         </section>

//         {/* Lessons Grid */}
//         <section className="py-12">
//           <h2 className="text-4xl font-bold text-purple-700 mb-8">Start Learning</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((lesson) => (
//               <div
//                 key={lesson}
//                 className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl border border-purple-100 hover:border-purple-300 transition duration-300 shadow-lg hover:shadow-xl"
//               >
//                 <h3 className="text-2xl font-bold text-purple-700 mb-4">Lesson {lesson}</h3>
//                 <p className="text-gray-700 mb-4">
//                   Learn essential phrases and vocabulary for everyday conversations.
//                 </p>
//                 <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
//                   Start Lesson
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Tutorials Section */}
//         <section className="py-12">
//           <h2 className="text-4xl font-bold text-purple-700 mb-8">Tutorials</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[1, 2, 3].map((tutorial) => (
//               <div
//                 key={tutorial}
//                 className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl border border-purple-100 hover:border-purple-300 transition duration-300 shadow-lg hover:shadow-xl"
//               >
//                 <h3 className="text-2xl font-bold text-purple-700 mb-4">Tutorial {tutorial}</h3>
//                 <p className="text-gray-700 mb-4">
//                   Watch and learn from expert language tutors.
//                 </p>
//                 <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
//                   Watch Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white bg-opacity-90 backdrop-blur-md py-8 mt-12 shadow-lg">
//         <div className="container mx-auto text-center">
//           <p className="text-gray-700 mb-4">© 2023 Lingo Bingo. All rights reserved.</p>
//           <div className="flex justify-center space-x-6">
//             <a href="#" className="text-gray-700 hover:text-purple-700 transition duration-300">
//               Facebook
//             </a>
//             <a href="#" className="text-gray-700 hover:text-purple-700 transition duration-300">
//               Twitter
//             </a>
//             <a href="#" className="text-gray-700 hover:text-purple-700 transition duration-300">
//               Instagram
//             </a>
//           </div>
//         </div>
//       </footer>
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
//       {/* Card Container */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Card 1 */}
//         <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
//           {/* Gradient Border */}
//           <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
//           {/* Content */}
//           <div className="relative z-10">
//             {/* Icon */}
//             <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
//               <svg
//                 className="w-8 h-8 text-purple-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                 ></path>
//               </svg>
//             </div>
//             {/* Title */}
//             <h3 className="text-2xl font-bold text-purple-700 mb-4">Lesson 1</h3>
//             {/* Description */}
//             <p className="text-gray-700 mb-6">
//               Learn essential phrases and vocabulary for everyday conversations.
//             </p>
//             {/* Button */}
//             <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
//               Start Lesson
//             </button>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
//           {/* Gradient Border */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
//           {/* Content */}
//           <div className="relative z-10">
//             {/* Icon */}
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
//               <svg
//                 className="w-8 h-8 text-blue-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 ></path>
//               </svg>
//             </div>
//             {/* Title */}
//             <h3 className="text-2xl font-bold text-blue-700 mb-4">Lesson 2</h3>
//             {/* Description */}
//             <p className="text-gray-700 mb-6">
//               Master common phrases and expressions for travel and work.
//             </p>
//             {/* Button */}
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
//               Start Lesson
//             </button>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
//           {/* Gradient Border */}
//           <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
//           {/* Content */}
//           <div className="relative z-10">
//             {/* Icon */}
//             <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
//               <svg
//                 className="w-8 h-8 text-pink-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M13 10V3L4 14h7v7l9-11h-7z"
//                 ></path>
//               </svg>
//             </div>
//             {/* Title */}
//             <h3 className="text-2xl font-bold text-pink-700 mb-4">Lesson 3</h3>
//             {/* Description */}
//             <p className="text-gray-700 mb-6">
//               Explore advanced vocabulary and grammar for fluent communication.
//             </p>
//             {/* Button */}
//             <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
//               Start Lesson
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default LingoBingoApp;



import React from "react";

const LingoBingoApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="p-6 bg-white bg-opacity-90 backdrop-blur-md shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo */}
    <div className="text-3xl font-bold text-purple-700 hover:text-purple-600 transition duration-300 cursor-pointer">
      Lingo Bingo
    </div>

    {/* Navbar */}
    <nav className="flex space-x-6">
      <a
        href="#"
        className="text-lg text-gray-700 hover:text-white px-4 py-2 rounded-lg transition duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">Home</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
      </a>
      <a
        href="#"
        className="text-lg text-gray-700 hover:text-white px-4 py-2 rounded-lg transition duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">Start Learning</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
      </a>
      <a
        href="#"
        className="text-lg text-gray-700 hover:text-white px-4 py-2 rounded-lg transition duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">Tutorials</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
      </a>
      <a
        href="#"
        className="text-lg text-gray-700 hover:text-white px-4 py-2 rounded-lg transition duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">About Us</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
      </a>
    </nav>

    {/* Login Button */}
    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
      Login
    </button>
  </div>
</header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-700">
            Welcome to Lingo Bingo!
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Learn new vocabulary in a fun and interactive way.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg text-lg transition duration-300 shadow-md">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Interactive Lessons</h3>
                <p className="text-gray-700 mb-6">
                  Engage with interactive lessons designed to make learning fun and effective.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Expert Tutors</h3>
                <p className="text-gray-700 mb-6">
                  Learn from expert tutors with years of experience in language teaching.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Progress Tracking</h3>
                <p className="text-gray-700 mb-6">
                  Track your progress and see how far you've come with our advanced analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6">
                  "Lingo Bingo has completely transformed the way I learn languages. The lessons are fun and engaging!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-purple-700">John Doe</p>
                    <p className="text-sm text-gray-600">Language Enthusiast</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6">
                  "The tutors are amazing, and the progress tracking feature keeps me motivated!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-blue-700">Jane Smith</p>
                    <p className="text-sm text-gray-600">Travel Blogger</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6">
                  "I love the interactive lessons. They make learning a new language so much fun!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-pink-700">Alice Johnson</p>
                    <p className="text-sm text-gray-600">Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Basic</h3>
                <p className="text-gray-700 mb-6">Perfect for beginners</p>
                <p className="text-4xl font-bold text-purple-700 mb-6">$9.99<span className="text-lg text-gray-600">/month</span></p>
                <ul className="text-gray-700 mb-6">
                  <li>10 Lessons</li>
                  <li>Basic Vocabulary</li>
                  <li>Email Support</li>
                </ul>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
                  Get Started
                </button>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Pro</h3>
                <p className="text-gray-700 mb-6">For serious learners</p>
                <p className="text-4xl font-bold text-blue-700 mb-6">$19.99<span className="text-lg text-gray-600">/month</span></p>
                <ul className="text-gray-700 mb-6">
                  <li>50 Lessons</li>
                  <li>Advanced Vocabulary</li>
                  <li>Priority Support</li>
                </ul>
                <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
                  Get Started
                </button>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Premium</h3>
                <p className="text-gray-700 mb-6">For language enthusiasts</p>
                <p className="text-4xl font-bold text-pink-700 mb-6">$29.99<span className="text-lg text-gray-600">/month</span></p>
                <ul className="text-gray-700 mb-6">
                  <li>Unlimited Lessons</li>
                  <li>Expert Tutors</li>
                  <li>24/7 Support</li>
                </ul>
                <button className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ 1 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">How do I get started?</h3>
                <p className="text-gray-700">
                  Simply sign up, choose a plan, and start learning with our interactive lessons.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 border-2 border-transparent hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Can I cancel anytime?</h3>
                <p className="text-gray-700">
                  Yes, you can cancel your subscription at any time without any hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-gradient-to-br from-purple-100 to-pink-100">
        <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Pricing Plans</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {/* Plan 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
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
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 text-white">
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
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Premium</h3>
            <p className="text-gray-700 mb-6">For language enthusiasts</p>
            <p className="text-4xl font-bold text-purple-700 mb-6">
              $29.99<span className="text-lg text-gray-600">/month</span>
            </p>
            <ul className="text-gray-700 mb-6">
              <li className="mb-2">✅ Unlimited Lessons</li>
              <li className="mb-2">✅ Expert Tutors</li>
              <li className="mb-2">✅ 24/7 Support</li>
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-white bg-opacity-90 backdrop-blur-md py-8 mt-12 shadow-lg">
        <div className="container mx-auto text-center">
          <p className="text-gray-700 mb-4">© 2023 Lingo Bingo. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-purple-700 transition duration-300">
              Facebook
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 transition duration-300">
              Twitter
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-700 transition duration-300">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LingoBingoApp;