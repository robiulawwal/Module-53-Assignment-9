
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-pink-50 bg-opacity-20 backdrop-blur-md py-16 mb-auto">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Lingo Bingo</h3>
            <p className="text-gray-700 mb-4">
              Learn new languages in a fun and interactive way. Join us today!
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                className="text-gray-700 hover:text-pink-600 transition duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-700 hover:text-pink-600 transition duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-700 hover:text-pink-600 transition duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-700 hover:text-pink-600 transition duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Quick Links</h3>
            <ul className="text-gray-700">
              <li className="mb-2">
                <a href="/about" className="hover:text-pink-600 transition duration-300">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/courses" className="hover:text-pink-600 transition duration-300">
                  Courses
                </a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:text-pink-600 transition duration-300">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-pink-600 transition duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Contact Us</h3>
            <ul className="text-gray-700">
              <li className="flex items-center justify-center md:justify-start mb-2">
                <FaMapMarkerAlt className="mr-2 text-pink-600" />
                123, feni, Bangladesh
              </li>
              <li className="flex items-center justify-center md:justify-start mb-2">
                <FaEnvelope className="mr-2 text-pink-600" />
                <a href="mailto:info@lingobingo.com" className="hover:text-pink-600 transition duration-300">
                  info@lingobingo.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-2">
                <FaPhone className="mr-2 text-pink-600" />
                <a href="tel:+1234567890" className="hover:text-pink-600 transition duration-300">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Subscribe</h3>
            <p className="text-gray-700 mb-4">
              Get the latest updates and offers directly in your inbox.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-600"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-pink-600 border-opacity-10">
          <p className="text-gray-700">
            © {new Date().getFullYear()} Robiul Awwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;