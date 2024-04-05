import { useState } from 'react';
import Config from '../../Config';

function RoomList({ rooms, chattingRoomNumber, chattingTextControl }) {
    const [room, setRoom] = useState(rooms);

    //방삭제
    const del = (roomId) => {
        if (window.confirm('삭제 하시겠습니까?')) {
            fetch(`${Config.Chatting_ChattingRooms}/${roomId}`, {
                method: 'DELETE',
            }).then((res) => {
                if (res.ok) {
                    setRoom({
                        ...room,
                        id: 0,
                    });
                }
            });
        }
    };
    if (room.id === 0) {
        return null;
    }

    //방추가

    return (
        <div key={room.id}>
            <div onClick={() => chattingTextControl(room.id)}>
                {room.roomName}
            </div>

            <button onClick={() => del(room.id)}>삭제</button>
        </div>
    );
}

export default RoomList;
