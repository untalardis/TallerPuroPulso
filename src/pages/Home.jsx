import Hero from '../components/Hero/Hero';
import InfoGrid from '../components/InfoGrid/InfoGrid';
import MainContent from '../components/MainContent/MainContent';

function Home() {
  return (
    <div className="brutalist-container b-left b-right">
      <Hero />
      <InfoGrid />
      <MainContent />
    </div>
  );
}

export default Home;