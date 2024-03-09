import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import '../Movie.Detil.css';

function Detail({ closeModal, id, coverImg, title, year, summary, genres }) {
    return (
        <div>
            <div className="headerder">
                <img
                    src={require('../img/close.png')}
                    onClick={closeModal}
                    style={{ width: '25px' }}
                />
            </div>
            <div>
                <img src={coverImg} alt={title} />
                <div>
                    <Link
                        to={`/MovieVideo/${id}`}
                        style={{ textDecoration: 'none' }}
                    >
                        영상보기
                    </Link>
                </div>
                <p>제작년도 : {year}</p>
                {/* summary가 '' 이 아닐경우에만 <div>줄거리</div> 를 표시해줌*/}
                {summary !== '' && <div>줄거리 : {summary}</div>} <p>장르</p>
                <ul>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Detail;
