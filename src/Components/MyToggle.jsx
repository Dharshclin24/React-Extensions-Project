import Switch from "react-switch";

const MyToggle = ({handleChange, isActive}) => {
  

  return (
    <div className="toggle-wrapper">
      <label>
        <Switch
          onChange={handleChange}
          checked={isActive ? true : false}
          className="react-switch"
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </label>
      
    </div>
  );
};
export default MyToggle;
