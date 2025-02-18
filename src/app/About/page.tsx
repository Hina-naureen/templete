import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 text-lg leading-8 mb-8">
          Welcome to our platform! We are dedicated to providing top-notch solutions
          to help you succeed in your personal and professional goals. Our team
          works tirelessly to deliver exceptional results tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To inspire, educate, and empower individuals to achieve their dreams through innovative solutions.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a leader in innovation and customer success, making a difference in the lives of millions.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600">
              Integrity, creativity, and customer-centricity are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;