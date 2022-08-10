import { BsGrid3X2GapFill, BsHddStackFill } from "react-icons/bs"; //ваши ссылки на иконки уже таво, недействительны
import "./style.css";

export function Control({ icon, onSwitch }) {
  const getChangValue = (evt) => {
    onSwitch(evt.currentTarget.children[0].getAttribute("icon"));
  };

  return (
    <div className="control" onClick={getChangValue}>
      {icon === "view_list" ? (
        <BsGrid3X2GapFill icon={"view_module"} />
      ) : (
        <BsHddStackFill icon={"view_list"} />
      )}
    </div>
  );
}
