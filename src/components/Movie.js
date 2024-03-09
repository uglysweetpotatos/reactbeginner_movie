import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';
import Modal from 'react-modal';
import Detail from './Detail';
import { useState } from 'react';

function Movie({ id, coverImg, title, year, summary, genres }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        console.log(true);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        console.log(false);
        setModalIsOpen(false);
    };

    return (
        <div className={styles.movies}>
            <div className={styles.movie} onClick={openModal}>
                <img src={coverImg} alt={title} className={styles.movie__img} />
                <div>
                    <h2 className={styles.movie__title}>{title}</h2>
                    <h3 className={styles.movie__year}>{year}</h3>
                    <p className={styles.movie__summary}>{summary}</p>
                    <ul className={styles.movie__genres}>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >
                <Detail
                    closeModal={closeModal}
                    id={id}
                    coverImg={coverImg}
                    title={title}
                    year={year}
                    summary={summary}
                    genres={genres}
                ></Detail>
            </Modal>
        </div>
    );
}

// function Movie(props) {
//     return (
//         <div>
//             <img src={props.coverImg} alt={props.title} />
//             <h2>{props.title}</h2>
//             <p>{props.summary}</p>
//             <ul>
//                 {props.genres.map((g) => (
//                     <li key={g}>{g}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
