import "./styles.scss";

function Input({ title, label, placeholder, titleColor, handleOnChange, defaultValue, type }) {
  return (
    <div className="input">
      <label
        htmlFor={label}
        className={titleColor ? `input_title--${titleColor}` : 'input_title--gray'}
      >
        {title}
      </label>
      <input
        id={label}
        placeholder={placeholder}
        onChange={handleOnChange}
        defaultValue={defaultValue || ''}
        type={type || 'text'}
        className="input_input"
      />
    </div>
  );
}

export default Input;
