import { useState } from 'react';
import '../Community/Community.css';
import Chattings from './Chattings';

function Community() {
    const [popup, setPopup] = useState(false);
    const popupClick = () => {
        setPopup(!popup);
    };
    return (
        <>
            <button className="bn13" onClick={popupClick}>
                카카오톡
            </button>
            {popup ? <Chattings popupClick={popupClick} /> : null}
        </>
    );
}

export default Community;
