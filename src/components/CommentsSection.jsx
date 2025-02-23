import React from 'react';
import Marquee from 'react-fast-marquee'; // Import the Marquee library

const CommentsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Spanish Learner',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      feedback:
        'Lingo Bingo made learning Spanish so much fun! The lessons are interactive, and the community is incredibly supportive. I can now confidently hold conversations in Spanish!',
    },
    {
      id: 2,
      name: 'Michael Lee',
      role: 'Japanese Learner',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      feedback:
        'I’ve tried many language apps, but Lingo Bingo stands out. The vocabulary lessons are well-structured, and the pronunciation guides are super helpful. Highly recommended!',
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'French Learner',
      avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
      feedback:
        'The Pro plan is worth every penny! The advanced lessons and expert tutors helped me achieve fluency in French faster than I expected. Thank you, Lingo Bingo!',
    },
    {
      id: 4,
      name: 'David Smith',
      role: 'German Learner',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      feedback:
        'The flashcards and quizzes are amazing! I’ve learned so many new words in just a few weeks. Lingo Bingo is the best language learning platform out there!',
    },
    {
      id: 5,
      name: 'Anna Martinez',
      role: 'Italian Learner',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      feedback:
        'I love the gamified approach to learning. It keeps me motivated, and I’ve made significant progress in Italian. Highly recommend Lingo Bingo to everyone!',
    },
    {
      id: 6,
      name: 'John Doe',
      role: 'Portuguese Learner',
      avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
      feedback:
        'The lessons are engaging, and the tutors are very knowledgeable. I’ve improved my Portuguese skills significantly in just a few months. Thank you, Lingo Bingo!',
    },
  ];

  return (
    <div className="pb-8 md:py-16 mb-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            What Our Learners Say
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Hear from our amazing community of learners who have transformed their language skills with Lingo Bingo.
          </p>
        </div>

        {/* Marquee for smooth horizontal scrolling */}
        <Marquee speed={60} gradient={false} pauseOnHover>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white max-w-[250px] md:max-w-[300px] lg:max-w-[400px] pl-4 md:pl-8 border-l-2 border-purple-400 mx-4">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-purple-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CommentsSection;