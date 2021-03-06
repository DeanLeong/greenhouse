import React, { useState, useEffect } from 'react';
import './ArticleEdit.css';
import { useParams, Redirect } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import { getArticle, updateArticle } from '../../services/articles';

const ArticleEdit = (props) => {
  const [article, setArticle] = useState({
    title: '',
    imgURL: '',
    content: '',
    author: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchArticle = async () => {
      const article = await getArticle(id)
      setArticle(article)
    }
    fetchArticle();
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setArticle({
      ...article,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = props.match.params
    const updated = await updateArticle(id, article)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/articles/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <div className="article-edit">
        <div className="image-container">
          <img className="edit-article-image" src={article.imgURL} alt={article.title} />
          <form className='edit-form' onSubmit={handleSubmit}>
            <label className="edit-label">
              <div>Title:</div>
              <input
                className="edit-input"
                placeholder='Title'
                value={article.title}
                name='title'
                required
                autoFocus
                onChange={handleChange}
              />
            </label>
            <label className="edit-label">
              <div>Author:</div>
              <input
                className="edit-input"
                placeholder='Author'
                value={article.author}
                name='author'
                required
                onChange={handleChange}
                />
            </label>
            <label className="edit-label">
              <div>Image URL:</div> 
              <input
                className="edit-input"
                placeholder='URL'
                value={article.imgURL}
                name='imgURL'
                required
                onChange={handleChange}
                />
            </label>
              <textarea
                className="edit-textarea-description"
                rows={10}
                cols={70}
                placeholder='Content'
                value={article.content}
                name='content'
                required
                onChange={handleChange}
              />
            <button type='submit' className="basic-button">Save</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ArticleEdit;