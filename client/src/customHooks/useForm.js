import { useState } from "react";
import server from "../utils/server";

const useForm = () => { // Add additionalData prop?
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    // const formEndpoint = e.target.action

    const data = [...e.target.elements].filter((input) => input.name).reduce((obj, input) => {
      if (!input.value) return {...obj}
      return {...obj, [input.name.replace(/-/ig, '_')]: input.value}
    }, {})
    
    // if (additionalData) {
    //   return {...data, ...additionalData}
    // }

    try {
      const jsonResponse = await server.addLeague(data)
    } catch (err){
      setMessage('failed to add league')
      setStatus('error')
    }
  }

  return { handleFormSubmit, status, message }
}

export default useForm