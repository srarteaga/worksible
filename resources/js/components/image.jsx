
const Image = ({type, title}) => {

  const url = `/images/${type}.png`
  return (
    <>
      <img 
        className="h-full" 
        src={url}
        alt={title}
      />
    </>
  )
}

export default Image