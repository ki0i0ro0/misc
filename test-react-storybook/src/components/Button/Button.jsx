import "./button.css";

function Button({ children, color = "default", size = "base", backgroundColor, onClick }) {
  return (
    <button className={`${color} ${size}`} style={backgroundColor && { backgroundColor }} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
