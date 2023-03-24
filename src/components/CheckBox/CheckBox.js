import "./styles.scss";

function CheckBox({ title, label, handleOnClick }) {
  return (
    <div className="checkbox">
      <label for={label} className="checkbox_container">
        <input
          id={label}
          type="checkbox"
          className="input"
          onClick={handleOnClick}
        />
        <span></span>
        {title}
      </label>
    </div>
  );
}

export default CheckBox;
