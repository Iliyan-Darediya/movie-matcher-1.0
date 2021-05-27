import {useContext} from "react";
import {Context} from '../Context'

export default function MovieCard({movie}){
    const {addMovie} = useContext(Context)
    return (
         <div className="card"  >
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
            <div className="card--content">
            <h3 className="card--title">{movie.title}</h3>
            {/* <h3 className="card--title">{movie.id}</h3> */}
            <button onClick={()=>addMovie(movie.title)}>add Movie</button>
            <p className = "card--para"><small>RELEASE DATE: {movie.release_date}</small></p>
            <p className = "card--para"><small>RATING: {movie.vote_average}</small></p>
            <p className="card--para">{movie.overview}</p>
            </div>

        </div>
    )
}