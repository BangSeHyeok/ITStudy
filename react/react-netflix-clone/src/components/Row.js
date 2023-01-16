import axios from '../api/axios';
import React ,{useState,useEffect} from 'react'
import './Row.css'
import MovieMoal from './MovieModal';

export const Row = ({isLargeRow , title, id, fetchUrl}) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
      fetchMovieData();
    }, [])
    
    const fetchMovieData = async () =>{
        const requests = await axios.get(fetchUrl);
        setMovies(requests.data.results)
    }

    const handleClick = (movie) =>{
        setModalOpen(true);
        setMovieSelected(movie);
    }

    return (
    <section className='row'>
        <h2>{title}</h2>
        <div className='slider'>
            <div className='slider__arrow-left'>
                <span className='arrow'
                    onClick={() =>{
                        document.getElementById(id).scrollLeft -= window.innerWidth -80;
                    }}
                >
                    {"<"}
                </span>
            </div>
            <div id={id} className="row__posters">
            {movies.map((movie) => (
                <img
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`https://image.tmdb.org/t/p/original/${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                    } `}
                    alt={movie.name}
                    onClick={()=> handleClick(movie)}
                />
                ))}
            </div>
            <div className='slider__arrow-right'>
                <span className='arrow'
                   onClick={() =>{
                        document.getElementById(id).scrollLeft += window.innerWidth -80;
                    }}
                >
                    {">"}
                </span>
            </div>
        </div>

        {
            modalOpen && (
                <MovieMoal
                    {...movieSelected}
                    setModalOpen ={setModalOpen}
                />
            )
        }
    </section>
  )
}
