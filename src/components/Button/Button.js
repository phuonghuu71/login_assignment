import './styles.scss';

function Button({customStyle, title, handleClick}) {
    return (
        <div className={`button__${customStyle}`}>
            <button type='button' onClick={handleClick}>{title}</button>
          </div>
    )
}

export default Button;