import { useEffect, useState } from 'react';

import { useCallback } from 'react';

// const useGet = (url) => {
//     const get = fetch(url)
//         .then((res) => {
//             return res.json();
//         })
//         .then((textList) => {});
//     return get;
// };

// export { useGet };

// export default function useFetch(url) {
// const [data, setData] = useState([]);
//1
// const getData = async () => {
//     const json = await (await fetch({ url })).json();
//     setData(json);
// };
// useEffect(() => {
//     getData();
// }, []);

// console.log(data);

//2
// const getChattingRooms = async () => {
//     const json = await (await fetch(url)).json();
//     setData(json);
// };
// useEffect(() => {
//     getChattingRooms();
// }, []);
// console.log('123123');
//3
// const getChattingRooms = async () => {
//     const json = await (await fetch(url)).json();
//     setData(json);
// };
// useEffect(() => {
//     getChattingRooms();
// }, [url]);
// console.log('123123');
//4
// useEffect(() => {
//     fetch(url)
//         .then((response) => response.json())
//         .then((json) => {
//             setData(json);
//         });
// }, [url]);
//5
//     fetch(url)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             value = data;
//         });

//     return value;
// }

export default function UseFetch(url) {
    // const [data, setData] = useState([]);
    let setData;

    // useEffect(() => {
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // setData(data);
            console.log(data);
            setData = data;
        });
    // }, [url]);

    return setData;
}
