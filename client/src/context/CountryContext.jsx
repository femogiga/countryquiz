import { createContext, useEffect, useState } from "react";


export const CountryContext = createContext()



const CountryProvider = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(e => console.error(e))
    }, [])

    return (
        <CountryContext.Provider value={{ data, setData }}>
            {props.children}
        </CountryContext.Provider>
    )
}


export default CountryProvider
