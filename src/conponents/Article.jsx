import React from 'react'
import './NewsStyle.css'

const Article = ({id,title,desc,img}) => {
  return (
    <div>
     <article className="new_article">
  <img src={img} alt="retro computer" />
  <div className="content">
    <h2>{id}</h2>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
</article>

    </div>
  )
}

export default Article
