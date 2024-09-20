import {
  Hero,
  FloatingNav,
  Grid,
  RecentProjects,
  Clients,
  Experience,
  Footer,
} from '@/components';
import { navItems } from '@/data';

export default function HomePage() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <Experience />
      <Footer />
    </main>
  );
}
