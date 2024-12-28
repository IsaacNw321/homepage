import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Resume of Isaac Pereira." />
        <meta name="keywords" content="React, Helmet, SEO, Web Development" />
        <meta name="author" content="Isaac Pereira" />
        <meta name="audience" content="General" />
        <meta charSet="utf-8" />
        <title>My Website</title>
      </Helmet>
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;