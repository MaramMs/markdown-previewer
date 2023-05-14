import { useEffect, useState } from 'react'

// const useLocalStorge = (key,intialValue) => {
//     const [value ,setValue] = useState(() => {
//         const storedValue = localStorage.getItem(key);
//         return storedValue ? JSON.parse(storedValue) : intialValue;
//     }) ;

//     useEffect(() => {
//         localStorage.setItem(key,JSON.stringify(value))
//     },[key,value])
//   return (
//   [value, setValue]
//   )
// }

// export default useLocalStorge


const useLocalStorge =(key , intialValue) =>{
    const [value , setValue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)): intialValue);

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return (
[value,setValue]
    )
}
export default useLocalStorge;