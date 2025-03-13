'use client';

import MobileLayout from './components/MobileLayout';
import Profile from './components/Profile';
import Introduce from './components/Introduce';
import TechSkill from './components/TechSkill';

export default function Home() {
  return (
    <MobileLayout currentPage={1} totalPages={1}>
      <Profile />
      <Introduce />
      <TechSkill />
    </MobileLayout>
  );
}