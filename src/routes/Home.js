import { useEffect, useState, React } from 'react';
import Movie from '../components/Movie';
import Comoon from '../common/Common.js';
import styles from './Home.module.css';
//css가 겹치지 않도록 하기위해서 모듈화 "styles"를 만들어서 사용한다
//해당페이지에서만 사용하는거는 모듈 / 공통으로는 모듈이아닌 일반 형식으로하는거같다

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        // const response = await fetch(
        //     'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        // );
        // const json = await response.json;

        //위코드를 아래처럼 짧게 만들수있음
        const json = await (
            await fetch(
                'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        // fetch(
        //     'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        // )
        //     .then((reponse) => reponse.json())
        //     // .then((json) => console.log(json));
        //     .then((json) => {
        //         setMovies(json.data.movies);
        //         setLoading(false);
        //     });
        getMovies();
    }, []);
    console.log(movies);

    const MoveToTop = () => {
        // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <div>
                <h1 className="siteTitle">영화 리스트test</h1>
                <div className="eyse__div">
                    <div className="eyes"></div>
                </div>
            </div>
            <div className={styles.container}>
                {loading ? (
                    <Comoon />
                ) : (
                    <div className={styles.movies}>
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </div>
            {loading || (
                <img
                    src={require('../img/goToUp.png')}
                    className={styles.goToUp}
                    onClick={MoveToTop}
                />
            )}
        </div>
    );
}

export default Home;
