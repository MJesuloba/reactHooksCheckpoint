import {useState,useEffect} from 'react';
import AddMovie from "./Components/AddMovie";
import "./App.css";
import MovieList from './Components/MovieList.js';
import Filtring from './Components/Filtring.js';

const info = [
  { title:'Chernobyl', img:'https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg', description:"The events recount the circumstances of the explosion of the Chernobyl nuclear reactor in April 1986 in the Soviet Socialist Union, which became one of the worst human disasters in the twentieth century.", posterURL:"https://tfpdl.se/chernobyl-complete-s01-1080p-bluray-dd5-1-x264-tfpdl/", rating:9.4 },
  { title:'Cosmos', img:'https://i0.wp.com/moviesandmania.com/wp-content/uploads/2019/11/Cosmos-movie-film-sci-fi-mystery-2019-1.jpg?w=707&ssl=1', description:"An exploration of our discovery of the laws of nature and coordinates in space and time.", posterURL:"https://tfpdl.se/cosmos-2019-720p-web-dl-x264-tfpdl/", rating:9.3 },
  { title:'MR. ROBOT', img:'https://m.media-amazon.com/images/M/MV5BM2QyNDIzOGMtNThhNS00NmUwLWI0ZjUtZjdkN2I1OTRjZWQ3XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg', description:"The series tells the story of a young man who suffers from social anxiety disorder. Working as a computer programmer in the morning and a hacker in the evening, he is assigned to work by a mysterious man who calls himself 'Mr. Robot' to infiltrate large corporations they believe are corrupting society.", posterURL:"https://tfpdl.se/mr-robot-s01e01-480p-hdtv-x264-tfpdl/", rating:8.5 },
  { title:'Planet Earth', img:'https://flxt.tmsimg.com/assets/p8431669_b_v8_aa.jpg', description:"Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.", posterURL:"https://www.youtube.com/watch?v=GfO-3Oir-qM", rating:9.4 },
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    console.log(rate+"  "+key);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
        <Filtring filter={filter}/>
        <MovieList list={filtredList} />
        <AddMovie adding={adding} />
    </div>
      );
}

export default App;
