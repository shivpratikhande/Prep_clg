import React from 'react';
import Slidebar from '../components/Slidebar'; // Import Sidebar component

const Syllabus = () => {
  return (
    <div className="flex space-x-2 min-h-screen"> {/* Increased height with min-h-screen */}
      {/* Sidebar */}
      <Slidebar />

      {/* Syllabus content */}
      <div className="p-4 flex-grow rounded-xl border-2 border-black shadow-green-300 shadow-lg min-h-screen"> {/* Increased height */}
        <h1 className="text-3xl font-bold mb-6">Syllabus</h1>

        <div className="text-lg space-y-8">
          {/* Module 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Module 1: Introduction to Network Security & Cryptography</h2>
            <p>
              Computer security and Network Security (Definition), CIA, Services, Mechanisms and attacks, The OSI security
              architecture, Network security model. Classical Encryption techniques (mono-alphabetic and poly-alphabetic substitution techniques: Vigenere cipher, Playfair cipher, transposition techniques: keyed and keyless transposition ciphers). Introduction to steganography.
              <br />
              <strong>Self-learning Topics:</strong> Study some more classical encryption techniques and solve more problems on all techniques. Homomorphic encryption in cloud computing.
            </p>
            <p><strong>Hours:</strong> 07</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
