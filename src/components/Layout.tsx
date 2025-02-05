import React, { ReactNode } from 'react';
import PacmanNav from './PacmanNav';
import PacmanBackground from './PacmanBackground';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black relative">
      <PacmanBackground />
      <div className="relative z-10">
        <PacmanNav />
        <main>{children}</main>
      </div>
    </div>
  );
}