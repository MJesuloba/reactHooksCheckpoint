import "./addmovie.css";
import ReactStars from "react-rating-stars-component";
import { useRef,useState } from "react";

export default function AddMovie({adding}) {

    let titleRef = useRef();
    let imgurlRef = useRef();
    let posurlRef = useRef();
    let descRef = useRef();
    let [rate, setRate] = useState(0);
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRate(newRating);
    };

    function submitted(ev){
        ev.preventDefault();

        let movieObject = {title:titleRef.current.value, img:imgurlRef.current.value, description:descRef.current.value, posterURL:posurlRef.current.value, rating:rate};
        adding(movieObject);

        //save all this information in localStorage
    }

    return (
        <div className="AddMovie">
            <form onSubmit={submitted}>

                <div className="row">
                    <label className="form-title">Title</label>
                    <div className="form-input">
                    <input name="title" ref={titleRef} type="text" className="form-control" id="colFormLabel" placeholder="Title" />
                    </div>
                </div>

                <div className="row">
                    <label className="form-title">Image URL</label>
                    <div className="form-input">
                    <input ref={imgurlRef} type="text" className="form-control" id="colFormLabel" placeholder="image url" />
                    </div>
                </div>

                <div className="input">
                    <span className="" id="basic-addon3">Your Poter URL </span>
                    <input ref={posurlRef} type="text" className="" id="basic-url" aria-describedby="basic-addon3" />
                </div>

                <div className="input">
                    <span className="">Description</span>
                    <textarea ref={descRef} className="" aria-label="With textarea"></textarea>
                </div>

                <div className="rating">
                <h6> Rating :  </h6>
                <ReactStars count={10}
                            onChange={ratingChanged}
                            size={50}
                            isHalf={true}
                            activeColor="#ffd700"/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">ADD THE MOVIE</button>
                </div>
            </form>
        </div>
    )
}
