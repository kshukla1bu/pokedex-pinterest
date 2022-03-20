import '../styles/App.css';
import GalleryContainer from "./GalleryContainer";
import Header from "./Header";

const App = () => {
  return (
    <div className={'App'}>
        <Header/>
        <GalleryContainer/>
    </div>
  );
};

export default App;
