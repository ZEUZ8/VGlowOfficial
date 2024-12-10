"use client"
import { QueryClientProvider,QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"

const Provider = ({children}) => {
    const [queryclient] = useState(()=> new QueryClient())
  return (
    <QueryClientProvider client={queryclient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default Provider
