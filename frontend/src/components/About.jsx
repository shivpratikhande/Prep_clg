import React from "react";
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 font-sans p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mt-6 mb-12">
            About Us
          </h1>

          {/* Welcome Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to <strong>StudyPrep</strong> – Your Centralized
              Platform for Learning
            </h2>
            <p className="mb-4">
              In today’s fast-paced world, education and knowledge should not be
              restricted by access barriers. Whether you're a student preparing
              for exams, a teacher looking for valuable classroom materials, or
              a lifelong learner curious about new topics,{" "}
              <strong>StudyPrep</strong> is here to support your journey.
            </p>
            <p>
              <strong>StudyPrep</strong> offers an all-in-one platform
              designed to streamline access to a variety of educational
              resources, including books, notes, videos, and curated links. By
              creating a centralized repository of high-quality materials, we
              aim to foster a community of learners and educators who value open
              access to knowledge.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At <strong>StudyPrep</strong>, we are committed to
              democratizing education. Our mission is to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Simplify</strong> the process of finding and accessing
                educational resources.
              </li>
              <li>
                <strong>Empower</strong> students, educators, and professionals
                by offering a diverse array of learning materials in one place.
              </li>
              <li>
                <strong>Foster collaboration</strong> between users who
                contribute their expertise and knowledge to the community.
              </li>
            </ul>
            <p>
              By breaking down the barriers to education, we strive to make
              knowledge accessible to everyone, regardless of geographic
              location or financial status. Our goal is to ensure that anyone,
              anywhere, has the tools they need to succeed.
            </p>
          </section>

          {/* Who We Serve Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Who We Serve</h2>
            <p className="mb-4">
              <strong>StudyPrep</strong> is built for a wide variety of
              users, including:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Students:</strong> Whether you're in school, college, or
                pursuing an advanced degree, you'll find everything from
                textbooks and class notes to tutorial videos and external
                learning links that can enhance your academic performance.
              </li>
              <li>
                <strong>Educators:</strong> Teachers and professors can benefit
                from our extensive library of educational materials, allowing
                them to find and share notes, videos, and lesson plans that
                enrich classroom learning.
              </li>
              <li>
                <strong>Lifelong Learners:</strong> If you love learning and
                exploring new subjects outside of formal education, StudyPrep
                offers a wealth of content on diverse topics from personal
                development to professional skills.
              </li>
              <li>
                <strong>Researchers:</strong> Our collection of books, papers,
                and other scholarly materials can support those looking to
                deepen their research across various academic fields.
              </li>
            </ul>
          </section>

          {/* Platform Features Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Our Platform Features
            </h2>
            <h3 className="text-xl font-semibold mb-2">
              1. Curated Resource Library
            </h3>
            <p className="mb-4">
              At the heart of <strong>StudyPrep</strong> is a vast,
              ever-growing library of educational content, curated by
              subject-matter experts and educators. Our resources include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Books:</strong> Access a wide range of academic and
                reference books.
              </li>
              <li>
                <strong>Notes:</strong> Study materials and notes covering a
                variety of subjects and courses.
              </li>
              <li>
                <strong>Videos:</strong> Educational tutorials, lectures, and
                explanatory videos for visual learning.
              </li>
              <li>
                <strong>Links:</strong> Curated external resources, including
                websites, research papers, and online courses.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              2. Easy Navigation and Search
            </h3>
            <p className="mb-4">
              Finding relevant materials is simple and intuitive with our
              platform’s user-friendly interface. You can search by:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Subject/Topic:</strong> Easily browse content
                categorized into specific fields, from science and technology to
                humanities and social sciences.
              </li>
              <li>
                <strong>Resource Type:</strong> Filter resources based on
                whether you're looking for books, videos, notes, or links.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              3. Personalized Recommendations
            </h3>
            <p className="mb-4">
              Our platform uses intelligent algorithms to provide personalized
              recommendations based on your past searches, browsing history, and
              academic interests. This ensures that you’re always discovering
              new and relevant resources tailored to your needs.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              4. User Contributions and Community
            </h3>
            <p className="mb-4">
              At <strong>StudyPrep</strong>, we believe that education is a
              collective effort. That’s why we allow users to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Share their own resources:</strong> Upload notes,
                videos, or recommended books to contribute to the community.
              </li>
              <li>
                <strong>Rate and review content:</strong> Help others by
                reviewing and rating the resources they find useful.
              </li>
              <li>
                <strong>Join discussions:</strong> Engage in forums where users
                can ask questions, share study tips, and discuss topics related
                to their fields of study.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              5. Cross-Device Compatibility
            </h3>
            <p>
              Our platform is designed to be accessible across all devices, so
              you can study and learn wherever you are – on your laptop, tablet,
              or smartphone.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
