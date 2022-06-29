import React, { createContext, useContext, useState } from 'react'


const StateContext = createContext();

const initialState = {
    jobs: [],
    userinfo: {}
}



export const ContextProvider = ({ children }) => {

    const [jobs, setJobs] = useState([])
    const [userInfo, setuserInfo] = useState(() => {
        const savedinfo = localStorage.getItem("userinfo");
        const initialValue = JSON.parse(savedinfo);
        return initialValue || "";
    })

    // console.log(userInfo); 
    return (
        <StateContext.Provider value={{ jobs, setJobs, userInfo, setuserInfo}}>
            {children}
        </StateContext.Provider>
    )
};


export const useStateContext = () => useContext(StateContext);