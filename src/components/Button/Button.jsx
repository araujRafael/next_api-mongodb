import style from './Button.module.css'

export default function Button({ children, type, btnColor, fontColor,func }) {
  return (
    <button
      className={style.btnId}
      type={type}
      style={{ background: `${btnColor}`, color: `${fontColor}` }} 
      onClick={func}
    >
      {children}
    </button>
  )
}