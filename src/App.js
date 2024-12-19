import logo from './logo.svg';
import './App.css';
import Title from "./components/Title/Title"
import Descritpion from './components/Descritpion/Descritpion';
import Image from './components/Image/Image';
import Site from './components/Site/Site';
import Math from './components/Math/Math';
import Colors from './components/Colors/Colors';

const name = "Yakov"
const description = "Ласкаво просимо до нашого сайту!"
const imageURL = "https://i2-prod.getsurrey.co.uk/incoming/article30401981.ece/ALTERNATES/s615/0_GettyImages-1718516359.jpg"




const site = {
  name: "YouTube",
  link: "https://www.youtube.com/"
}




function App() {
  return (
    <div className="App">
      <Title name={name}/>
      <Descritpion description={description}/>
      <Image imageURL={imageURL}/>
      <Site name={site.name} link={site.link}/>
      <Math/>
      <Colors/>
    </div>
  );
}

export default App;
