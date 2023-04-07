// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImage, onClicked, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage

  const onImage = () => {
    onClicked(id)
  }

  const classText = isActive ? 'noOpacity' : 'opacity'
  return (
    <li className="list-item">
      <button className={`btn ${classText}`} type="button" onClick={onImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`image-item ${classText}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
