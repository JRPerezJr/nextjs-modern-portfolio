import ClientsSection from '../components/clients';
import HireSection from '../components/hire';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';
import WorkSection from '../components/work';

export default function Home() {
  return (
    <Layout>
      <MainNavigation />
      <WorkSection />
      <ClientsSection />
      <HireSection />
    </Layout>
  );
}
