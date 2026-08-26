import SolutionPage from '../components/SolutionPage';
import { solutions } from '../data/solutionPages';
export default function Page(){ return <SolutionPage data={solutions['mobile-app']} path="/mobile-app" />; }
