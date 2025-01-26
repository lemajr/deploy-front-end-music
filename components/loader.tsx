import { TbLoader } from "react-icons/tb";

const Loader = () => {
    return (
        <div className="flex justify-center items-center drop-shadow-lg h-screen">
            {/* Apply the animate-spin class directly to the icon */}
            <TbLoader className="animate-spin text-4xl text-blue-500 "  />
        </div>
    );
};

export default Loader;
