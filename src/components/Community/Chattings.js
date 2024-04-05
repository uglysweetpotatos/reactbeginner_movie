import React, { useEffect, useState } from 'react';
import ChattingFrinds from './sidebar/ChattingFrinds';
import ChattingLists from './sidebar/ChattingLists';
import ChattingOpens from './sidebar/ChattingOpens';
import ChattingOption from './sidebar/ChattingOption';
import '../Community/Community.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

function Chattings({ popupClick }) {
    useEffect(() => {
        $('.community_wrap').resizable({
            handles: ' n, e, s, w, ne, se, sw, nw',
        });
        $('.community_wrap').draggable({
            handle: '.community_head',
            scroll: false,
        });
    }, []);

    const [view, setView] = useState(3);
    const viewControl = (viewNumber) => {
        setView(viewNumber);
    };
    return (
        <div className="community_wrap">
            <div className="community_head">
                <button
                    onClick={popupClick}
                    className="button-16"
                    role="button"
                >
                    x
                </button>
            </div>
            <div className="community_body">
                {view == 1 && <ChattingFrinds />}
                {view == 2 && <ChattingLists />}
                {view == 3 && <ChattingOpens />}
                {view == 4 && <ChattingOption />}
            </div>
            <div className="community_footer">
                <button onClick={() => viewControl(1)}>친구</button>
                <button onClick={() => viewControl(2)}>채팅</button>
                <button onClick={() => viewControl(3)}>오픈</button>
                <button onClick={() => viewControl(4)}>설정</button>
            </div>
        </div>
    );
}

export default Chattings;
