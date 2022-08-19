import React from 'react'
import { Link } from 'react-router-dom'
import { useListNewsQuery } from '../../features/news/newsAPI'

const Main = () => {
  const { data, error, loading } = useListNewsQuery()

  const ShowNews = () => {
    if (error) {
      return <div>Error {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    if (!data) {
      return <div>No data</div>
    }

    return data.map(news => (
      <div key={news}>
        <Link to={`/news/${news}`}>{news}</Link>
      </div>
    ))
  }

  console.log(loading)
  console.log(error)
  console.log(data)

  return (
    <div>
        <Link to="/newspage/1">новость</Link>
        <ShowNews/>
    </div>
  )
}

export default Main