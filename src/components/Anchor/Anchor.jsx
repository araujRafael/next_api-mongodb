

export default function Anchor({key,icon,description,direction}){
  return (
    <a
     href={direction}
     key={key}
    >
      {icon}
      {description}
    </a>
  )
}