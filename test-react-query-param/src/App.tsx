import React from "react"
import { useLocation } from "react-router-dom"

interface QueryString {
  [key: string]: string
}

const Books: React.FC = () => {
  const search = useLocation().search

  const query1 = search
    .slice(1)
    .split("&")
    .map((str) => [str.split("=")[0], str.split("=")[1]])
    .reduce((acc, a) => {
      acc[a[0]] = a[1]
      return acc
    }, {} as QueryString)

  return (
    <div>
      <h2>Books Page</h2>
      <div>hoge: {query1["hoge"]}</div>
      <div>fuga: {query1["fuga"]}</div>
    </div>
  )
}

export default Books
