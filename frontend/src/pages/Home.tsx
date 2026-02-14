export const Home = () => {
    return (
        <div className="h-full w-full px-7">
            <div className="w-full h-[60%] flex justify-between items-center">
                <div className="w-[48%] h-[300px] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20">
                    <div></div>
                </div>
                <div className="w-[48%] h-[300px] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20">
                    <div></div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col">
                <div className="px-2 mb-3 font-semibold">
                    <p>Overview by Category</p>
                </div>
                <div className="w-full h-[40px] text-sm flex items-center px-2">
                    <ul className="flex gap-7 text-white">
                        <li className="font-bold">All</li>
                        <li>Technicals</li>
                    </ul>
                </div>
                <div className="flex-1 bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    );
};
