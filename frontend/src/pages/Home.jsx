import Carrousel from "@components/Carousel";
import Presentation from "@components/Presentation";
import ProposalList from "@components/ProposalList";
// import MoodBoard from "@components/MoodBoard";

export default function Home() {
  return (
    <header className="App-header ">
      <Carrousel />
      <Presentation />
      <ProposalList />
    </header>
  );
}
