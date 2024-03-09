import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Comoon from '../common/Common';
function MovieVideo() {
    // 파라미터 가지고오는 방법
    //방법 1
    // const x = useParams();
    // console.log(x);
    // console.log(x.id);
    //방법 2
    const { id } = useParams();
    // console.log(id);
    //
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    }, [id]);
    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return (
        <div>
            <h1>
                <Link to={`${process.env.PUBLIC_URL}/`} style={{ textDecoration: 'none' }}>
                    뒤로가기
                </Link>
            </h1>
            <hr />
            {loading ? (
                <Comoon />
            ) : (
                <div>
                    <img src={movie.large_cover_image}></img>
                </div>
            )}
        </div>
    );
}

export default MovieVideo;
