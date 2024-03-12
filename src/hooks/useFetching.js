import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function fetching() {
        setLoading(true)
        callback().then(() => {
            setLoading(false)
        }).catch((err)=>{
            setError(err.message)
            setLoading(false)
        })

    }

    return [fetching, isLoading, error]

}