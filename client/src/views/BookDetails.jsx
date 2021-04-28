import { useLocation } from "react-router-dom";

export default function BookDetails() {
  const data = useLocation()
  return (
    <div>
      <h1>Book Detail</h1>
      <img src={data.state.imageUrl} alt="..."/>
      <h3>Title: {data.state.title}</h3>
      <h3>Description: {data.state.description}</h3>
      <h3>Author: {data.state.author}</h3>
    </div>
  )
}
