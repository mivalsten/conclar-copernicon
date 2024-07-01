import { useStoreState, useStoreActions } from "easy-peasy";
import configData from "../config.json";
import { LocalTime } from "../utils/LocalTime";

const ShowOnlyBegginerFriendlyItems = () => {
  const program = useStoreState((state) => state.program);
  const showOnlyBeginnerFriendlyItems = useStoreState((state) => state.showOnlyBeginnerFriendlyItems);
  const setShowOnlyBegginerFriendlyItems = useStoreActions(
    (actions) => actions.setShowOnlyBegginerFriendlyItems
  );
  return (
    <div className="past-items-checkbox switch-wrapper">
      <input
        id={"show_greenleaf_items"}
        name={"show_greenleaf_items"}
        className="switch"
        type="checkbox"
        checked={showOnlyBeginnerFriendlyItems}
        onChange={(e) => { 
          setShowOnlyBegginerFriendlyItems(e.target.checked);
        }}
      />
      <label htmlFor={"show_greenleaf_items"}>
        {"Pokaż tylko przyjazne dla początkujących"}
      </label>
    </div>
    );
};

export default ShowOnlyBegginerFriendlyItems;
