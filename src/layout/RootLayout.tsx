import React from 'react';
import { Helmet } from 'react-helmet';

const RootLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">My Website</h1>
      </header>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 My Website
      </footer>
    </div>
  );
};

export default RootLayout;