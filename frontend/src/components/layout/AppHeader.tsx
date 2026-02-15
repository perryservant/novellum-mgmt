import { BellIcon, ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export const AppHeader = () => {
    return (
        <div className="h-[47px] w-full flex justify-between items-center">
            {/* Left */}
            <div className="w-fit h-full flex gap-8 items-center text-white bg-white/20 backdrop-blur-sm rounded-lg px-3 border border-white/20">
                <div className="flex items-center gap-3">
                    <img className="h-[25px]" src="/g3.svg" alt="Logo" />
                    <p className="font-semibold text-lg">Novellum</p>
                </div>
            </div>

            {/* Right */}
            <div className="w-fit h-full flex justify-center items-center gap-6 bg-white/20 backdrop-blur-sm rounded-lg px-3 border border-white/20">
                <div className="flex gap-1 bg-white/95 pl-2 pr-1 py-[2px] rounded-xl items-center">
                    <p className="text-black text-sm">Sunshine Harbour</p>
                    <CheckCircleIcon className="w-[20px] text-green-500 animate-green-glow" />
                </div>

                {/* Command Center */}
                <div className="flex items-center justify-center gap-3">
                    <div className="flex gap-2">
                        <div className="w-[20px] text-white/60">
                            <BellIcon />
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-white/20">
                            <p className="text-white/50 text-sm font-bold">PS</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <ChevronDownIcon className="text-white w-[16px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
