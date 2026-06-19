import HeroSection from '../components/home/HeroSection';
import JournalMetrics from '../components/home/JournalMetrics';
// import FeaturedArticles from '../components/home/FeaturedArticles';
import LatestIssueSection from '../components/home/LatestIssueSection';
import MostRead from '../components/home/MostRead';
import CallToAction from '../components/home/CallToAction';

export default function HomePage() {
  return (
    <>
      <title>International Journal of Rural Health and Medicine (IJRHM) | Home</title>
      <HeroSection />
      <JournalMetrics />
      {/* <FeaturedArticles /> */}
      <LatestIssueSection />
      <MostRead />
      <CallToAction />
    </>
  );
}
