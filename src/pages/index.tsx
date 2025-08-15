import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PortfolioItem from '../components/PortfolioItem';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PortfolioItem 
              title="Project 1" 
              description="Description of project 1" 
              image="/path/to/image1.jpg" 
            />
            <PortfolioItem 
              title="Project 2" 
              description="Description of project 2" 
              image="/path/to/image2.jpg" 
            />
            <PortfolioItem 
              title="Project 3" 
              description="Description of project 3" 
              image="/path/to/image3.jpg" 
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;