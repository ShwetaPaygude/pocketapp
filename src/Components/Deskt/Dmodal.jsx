import { useState, useEffect, useCallback } from "react"
import "./Deskstyle.css";



const Dmodal = ({ groupNamesParent, setGroupNamesParent, onClose }) => {
    const [groupName, setGroupName] = useState("");
    const [bgColor, setBgColor] = useState("rgb(179, 139, 250)");

    const handleGroupNameChange = (event) => setGroupName(event.target.value);

    const handleColorChange = (color) => setBgColor(color);

    const saveGroup = useCallback(() => {
        const newGroup = { name: groupName, color: bgColor };
        const updatedGroups = [...groupNamesParent, newGroup];
        setGroupNamesParent(updatedGroups);
        localStorage.setItem("groupNames", JSON.stringify(updatedGroups));
        setGroupName("");
        onClose();
    }, [groupName, bgColor, groupNamesParent, setGroupNamesParent, onClose]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.className === "desk_prompt_overlay") {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    const renderColorOptions = () => {
        const colors = ["1", "2", "3", "4", "5", "6"];
        return colors.map((color) => (
            <ColorOption
                key={color}
                color={`--color-${color}`}
                currentColor={bgColor}
                onSelectColor={handleColorChange}
            />
        ));
    };

    return (
        <div className="desk_prompt_overlay">
            <div className="prompt">
                <PromptTitle />
                <PromptInput value={groupName} onChange={handleGroupNameChange} />
                <div className="prompt_color_input">
                    <span>Choose color</span>
                    <div className="prompt_color_input_color">{renderColorOptions()}</div>
                </div>
                <PromptCloseButton onClick={saveGroup} isDisabled={!groupName.trim()} />
            </div>
        </div>
    );
};
const PromptTitle = () => <div className="prompt_title">Create New Notes Group</div>;

const PromptInput = ({ value, onChange }) => (
    <div className="prompt_input">
        <span>Group Name</span>
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter Group Name..."
        />
    </div>
);
const ColorOption = ({ color, currentColor, onSelectColor }) => {
    const colorValue = getComputedStyle(document.documentElement).getPropertyValue(color);
    const isSelected = currentColor === colorValue;
    const className = `prompt_color_input_color_${color.slice(-1)} ${isSelected ? "highlight" : ""}`;
    
    return (
        <div
            className={className}
            onClick={() => onSelectColor(colorValue)}
        ></div>
    );
};

const PromptCloseButton = ({ onClick, isDisabled }) => (
    <div className="prompt_close">
        <button onClick={onClick} disabled={isDisabled}>
            Create
        </button>
    </div>
);



export default Dmodal
