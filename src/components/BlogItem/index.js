// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {BlogItemDetails} = props
  const {title, description, publishedDate} = BlogItemDetails
  return (
    <li>
      <div className="lists-container">
        <h1 className="list-title">{title}</h1>
        <p className="list-date">{publishedDate}</p>
      </div>
      <p className="list-description">{description}</p>
      <hr className="hr-style" />
    </li>
  )
}

export default BlogItem
