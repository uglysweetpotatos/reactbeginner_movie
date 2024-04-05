import { useState } from 'react';
import '../Community/Community.css';

function ChattingList({ list, delItem }) {
    return (
        <>
            {list.map((v) => (
                /*  div 태그의 key로 배열의 index 사용*/
                <div
                    key={v.key}
                    style={{
                        width: '400px',
                        height: '100px',
                        backgroundColor: 'antiquewhite',
                    }}
                >
                    <div className="head">
                        <input
                            type="button"
                            value="삭제"
                            onClick={() => delItem(v.key)}
                        />
                    </div>
                    <div className="body">
                        {v.name}, idx: {v.key}
                    </div>
                </div>
            ))}
        </>
    );
}

export default ChattingList;
