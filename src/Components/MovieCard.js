
import "./moviecard.css";

export default function MovieCard({ele}) {
    return (
        <div className="MovieCard">
                <div className="MovieCardBody">
                    <div className="MovieCardImg">
                    <img width="180" src={ele.img} />
                    </div>
                    <div className="MovieCardDetails">
                    <h2>{ele.title}</h2>
                    <p>{ele.description}</p>
                    <h3>Rate : {ele.rating}</h3>
                    <a className="btn" href={ele.posterURL}>Watch Now</a>
                    </div>
                </div>
            </div>
    )
}
