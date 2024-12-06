"use client"
import { QueryClientProvider,QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"

const Provider = ({children}) => {
    const [queryclient] = useState(()=> new queryclient())
  return (
    <QueryClientProvider client={queryclient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        {children}
    </QueryClientProvider>
  )
}

export default Provider
