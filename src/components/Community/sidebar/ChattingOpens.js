import React, { useEffect, useReducer, useRef, useState } from 'react';
import UseFetch from '../../../hook/useFetch';
import RoomList from '../RoomList';
import Config from '../../../Config';

function ChattingList({ chattingRoomNumber, movieRoom }) {
    const [textList, setTextList] = useState([]); // 채팅내역가지고오기
    const text = useRef(); // 채팅추가
    const [name, setName] = useState(''); //텍스트박스 초기화
    //==================================================
    //채팅가지고오기
    const getTextList = () => {
        fetch(`${Config.Chatting_Text}?chattingRoom=${chattingRoomNumber}`)
            .then((res) => {
                return res.json();
            })
            .then((textList) => {
                setTextList(textList);
            });
    };
    useEffect(() => {
        getTextList();
    }, []);
    // //==================================================
    //==================================================
    // const [textList, setTextList] = useReducer([],[]); // 채팅내역가지고오기
    // const getTextList = () => {
    //     UseFetch(
    //         `http://localhost:3001/chattingText?chattingRoom=${chattingRoomNumber}`
    //     );
    // };
    // useEffect(() => {
    //     getTextList();
    // }, []);
    //채팅가지고오기
    // const GetTextList = () => {
    //     setTextList(
    //     );
    // };
    // useEffect(() => {
    //     GetTextList();
    // }, []);
    //==================================================
    const backToChattingList = () => {
        //채팅방리스트로 돌아가기
        movieRoom(true);
    };
    // 채팅추가
    function onSubmit(e) {
        setName(e.target.value);
        if (e.key === 'Enter') {
            fetch(
                `${Config.Chatting_Text}?chattingRoom=${chattingRoomNumber}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // id: (chattingRooms.length + 1).toString(),  //자동으로 랜덤으로 id가 들어감 구지 안해도됨
                        chattingRoom: chattingRoomNumber,
                        // text: text.current.value,
                        text: e.target.value,
                    }),
                }
            ).then((res) => {
                if (res.ok) {
                    getTextList();
                    text.current.value = '';
                }
            });
        }
    }
    return (
        <>
            <button onClick={() => movieRoom(true)}>뒤로가기</button>
            <table>
                <tbody>
                    {textList.map((text) => (
                        <tr key={text.id}>
                            <td>{text.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <input
                type="text"
                ref={text}
                onKeyPress={(e) => onSubmit(e)}
                defaultValue={name}
            />
        </>
    );
}
function ChattingOpens() {
    const [chattingRoomNumber, setChattingRoomNumber] = useState(); //어떤채팅방으로 들어갈것인지
    const [RoomClick, movieRoom] = useState(true); //채팅방 리시트 or 채팅내역
    const [isLoading, setIsLoading] = useState(false); //저장 로딩중
    const roomName = useRef(null); // 방 생성
    const [chattingRooms, setChattingRooms] = useState([]); // 방리스트 가지고오기
    const getChattingRooms = () => {
        // const getChattingRooms1 = useFetch(
        //     'http://60.100.48.131:3001/chattingRooms'
        // );
        fetch(`${Config.Chatting_ChattingRooms}`)
            .then((res) => {
                return res.json();
            })
            .then((chattingRooms) => {
                setChattingRooms(chattingRooms);
            });
    };
    useEffect(() => {
        getChattingRooms();
    }, []);
    //채팅방 <=> 채팅리스트
    const chattingTextControl = (id) => {
        console.log(id);
        setChattingRoomNumber(id);
        movieRoom(!RoomClick);
    };

    //방추가
    function onSubmit(e) {
        console.log(roomName.current.value);
        // if (!roomName.current.value == null) {
        setIsLoading(true);
        fetch(`${Config.Chatting_ChattingRooms}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // id: (chattingRooms.length + 1).toString(),  //자동으로 랜덤으로 id가 들어감 구지 안해도됨
                roomName: roomName.current.value,
            }),
        }).then((res) => {
            if (res.ok) {
                alert('생성이 완료 되었습니다');
                setIsLoading(false);
                getChattingRooms();
            }
        });
        // }
    }
    //리턴
    if (chattingRooms.length === 0) {
        return <span>Loading...</span>;
    }
    return (
        <>
            {RoomClick ? (
                <>
                    {chattingRooms.map((room) => (
                        <RoomList
                            key={room.id}
                            rooms={room}
                            chattingRoomNumber={chattingRoomNumber}
                            chattingTextControl={chattingTextControl}
                        />
                    ))}
                    <input
                        type="text"
                        placeholder="입력하시요"
                        ref={roomName}
                    ></input>
                    <button
                        style={{
                            opacity: isLoading ? 0.3 : 1,
                        }}
                        onClick={onSubmit}
                    >
                        {isLoading ? 'Saving...' : '방생성'}
                    </button>
                </>
            ) : (
                <ChattingList
                    chattingRoomNumber={chattingRoomNumber}
                    movieRoom={movieRoom}
                />
            )}
        </>
    );
}

export default ChattingOpens;
