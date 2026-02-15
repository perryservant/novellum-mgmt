interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export const Switch = ({ checked, onChange }: SwitchProps) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                className="sr-only peer"
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
            />
            <div
                className="peer bg-white/40 rounded-full outline-none duration-500 after:duration-300 w-9 h-4 
                peer-focus:outline-none after:content-[''] 
                after:rounded-full after:absolute after:outline-none after:h-6 after:w-7 after:bg-red-400 after:-top-1 
                after:-left-2 after:flex after:justify-center after:items-center  
                peer-checked:after:bg-green-400 peer-checked:after:translate-x-6"
            ></div>
        </label>
    );
};
