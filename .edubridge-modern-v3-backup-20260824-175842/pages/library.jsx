import SolutionPage from '../components/SolutionPage';
import { solutions } from '../data/solutionPages';
export default function Page(){ return <SolutionPage data={solutions['library']} path="/library" />; }
