import { Switch } from "../components/common/Switch";
import { RadialRingChart } from "../components/charts/RadialRingChart";

export const Home = () => {
    return (
        <div className="h-full w-full px-7">
            <div className="w-full h-[55%] flex gap-10 justify-between items-center">
                <div className="flex w-[50%] h-[300px] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 gap-2 px-3 py-2 text-white">
                    <div className="w-[60%] h-full flex gap-4">
                        <div className="h-full w-fit flex justify-center items-center">
                            <RadialRingChart />
                        </div>
                        <div className="flex-1">
                            <div>
                                <div>
                                    <p>Leads</p>
                                </div>
                                <div className="flex items-end">
                                    <h2 className="text-3xl">75</h2>
                                    <p className="mb-1">/100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center h-full bg-green-900/30 rounded-2xl p-2 gap-10">
                        <div className="flex flex-col gap-3 text-center">
                            <h2 className="font-bold text-xl">Email Auto Pilot</h2>
                            <p className="text-xs text-white/70">
                                Email auto allows you to have this platform respond to your new
                                leads and send the intro email tamplet to 2 hours after receiving
                                lead
                            </p>
                        </div>
                        <div className="h-fit w-fit flex justify-center items-center gap-4 bg-green-300/30 rounded-lg py-3 pl-5 pr-4">
                            <Switch />
                            <p className="text-sm font-semibold">Enabled</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-[300px] gap-3 bg-white/5 backdrop-blur-sm rounded-3xl px-3 py-2">
                    <div className="w-full h-full grid grid-cols-3 gap-3">
                        <div className="w-full h-full bg-white/10 rounded-xl"></div>
                        <div className="w-full h-full bg-white/10 rounded-xl"></div>
                        <div className="h-full w-full grid grid-cols-1 gap-3">
                            <div className="w-full h-full bg-white/10 rounded-xl"></div>
                            <div className="w-full h-full bg-white/10 rounded-xl"></div>
                        </div>
                        <div className="w-full h-full bg-white/10 rounded-xl"></div>
                        <div className="w-full h-full bg-white/10 rounded-xl"></div>
                        <div className="w-full h-full bg-white/10 rounded-xl"></div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col text-white">
                <div className="px-2 mb-3 font-semibold">
                    <p>Overview by Category</p>
                </div>
                <div className="w-full h-[40px] text-sm flex items-center px-2">
                    <ul className="flex gap-7">
                        <li className="font-bold">All</li>
                        <li>Technicals</li>
                    </ul>
                </div>
                <div className="flex-1 bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    );
};
