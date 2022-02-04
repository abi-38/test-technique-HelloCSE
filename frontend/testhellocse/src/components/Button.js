import './Button.css';

const Button = (props) => {
    return (
      <button
          type={props.type || 'button'}
          className={`Bouton-link ${props.className? props.className : ''}`}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.text} {props.textBis}
      </button>
    );
}

export default Button;