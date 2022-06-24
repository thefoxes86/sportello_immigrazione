const Flag = ({ image, lang }) => {
  return (
    <div className="flex flex-col items-center">
      <span>{image}</span>
      <span>{lang}</span>
    </div>
  )
}

export default Flag
