// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsListDetails} = props
  return (
    <ul className="Items-container">
      {blogsListDetails.map(eachBlog => (
        <BlogItem BlogItemDetails={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
