import { useState } from "react";
import { cn } from "../lib/utils";
import { Switch } from "../components/common/Switch";
import { RadialRingChart } from "../components/charts/RadialRingChart";
import { Clock } from "../components/Clock";
import {
    ArrowDownOnSquareIcon,
    DocumentArrowUpIcon,
    ArrowsRightLeftIcon,
    ClockIcon,
    ArrowPathIcon,
    Cog8ToothIcon,
    PencilSquareIcon,
    EnvelopeIcon,
    BellAlertIcon,
    InboxStackIcon,
    EyeIcon,
    UserGroupIcon,
    QueueListIcon,
    CpuChipIcon
} from "@heroicons/react/24/outline";

export const Home = () => {
    const [category, setCategory] = useState("Leads");
    const [isEnabled, setIsEnabled] = useState(false);
    const [focus, setFocus] = useState(false);

    return (
        <div className="h-full w-full px-7 relative">
            <div className="w-full h-[55%] flex gap-10 justify-between items-center">
                <div className="flex w-[50%] h-[300px] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 gap-2 px-3 py-2 text-white">
                    <div className="w-[60%] h-full flex gap-4">
                        <div className="h-full w-fit flex justify-center items-center">
                            <RadialRingChart />
                        </div>
                        <div className="flex-1 h-full flex flex-col justify-center gap-8">
                            <div>
                                <div className="font-semibold flex items-center gap-2">
                                    <ArrowDownOnSquareIcon className="h-6" />
                                    <p>New leads</p>
                                </div>
                                <div className="flex items-end ml-8">
                                    <h2 className="text-3xl font-bold">75</h2>
                                    <p className="mb-1 ml-2 text-white/50 text-sm">/100</p>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold flex items-center gap-2">
                                    <DocumentArrowUpIcon className="h-6" />
                                    <p>Email intro sent</p>
                                </div>
                                <div className="flex items-end ml-8">
                                    <h2 className="text-3xl font-bold">45</h2>
                                    <p className="mb-1 ml-2 text-white/50 text-sm">/87</p>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold flex items-center gap-2">
                                    <ArrowsRightLeftIcon className="h-6" />
                                    <p>Follow up to do</p>
                                </div>
                                <div className="flex items-end ml-8">
                                    <h2 className="text-3xl font-bold">25</h2>
                                    <p className="mb-1 ml-2 text-white/50 text-sm">/345</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cn(
                            "flex-1 flex flex-col justify-center items-center h-full rounded-2xl p-2 gap-10",
                            isEnabled ? "bg-green-900/30" : "bg-red-900/30"
                        )}
                    >
                        <div className="flex flex-col gap-3 text-center">
                            <h2 className="font-bold text-xl">Email Auto Pilot</h2>
                            <p className="text-xs text-white/70">
                                Email auto allows you to have this platform respond to your new
                                leads and send the intro email tamplet to 2 hours after receiving
                                lead
                            </p>
                        </div>
                        <div
                            className={cn(
                                "h-fit w-fit flex justify-center items-center gap-4 rounded-lg py-3 pl-5 pr-4",
                                isEnabled ? "bg-green-300/30" : "bg-red-900/30"
                            )}
                        >
                            <Switch
                                checked={isEnabled}
                                onChange={(checked) => setIsEnabled(checked)}
                            />
                            <p className="text-sm font-semibold">
                                {isEnabled ? "Enabled" : "Disabled"}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-w-0 h-[300px] gap-3 bg-white/5 backdrop-blur-sm rounded-3xl px-3 py-2 overflow-hidden text-white">
                    <div className="w-full h-full min-h-0 grid gap-3 grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
                        <div className="min-w-0 min-h-0 flex flex-col justify-center gap-8 overflow-hidden bg-white/10 rounded-xl px-3">
                            <div className="flex justify-between">
                                <BellAlertIcon className="h-6 text-white/50" />
                                <PencilSquareIcon className="h-5 text-white/70" />
                            </div>
                            <div>
                                <p className="text-sm font-bold mb-1">Notification preference</p>
                                <p className="text-xs">Manage your notification</p>
                            </div>
                        </div>
                        <div className="min-w-0 min-h-0 flex flex-col justify-center gap-8 overflow-hidden bg-white/10 rounded-xl px-3">
                            <div className="flex justify-between">
                                <EnvelopeIcon className="h-6 text-white/50" />
                                <PencilSquareIcon className="h-5 text-white/70" />
                            </div>
                            <div>
                                <p className="text-sm font-bold mb-1">Email template</p>
                                <p className="text-xs">Edit intro email and attachment</p>
                            </div>
                        </div>
                        <div className="min-w-0 min-h-0 overflow-hidden grid gap-3 grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
                            <div className="min-w-0 min-h-0 overflow-hidden flex gap-3 items-center bg-white/10 rounded-xl px-3">
                                <ClockIcon className="h-6 text-white/50" />
                                <Clock />
                            </div>
                            <div
                                className={cn(
                                    "min-w-0 min-h-0 overflow-hidden flex gap-3 items-center rounded-xl px-3",
                                    isEnabled ? "bg-green-400/30" : "bg-red-900/30"
                                )}
                            >
                                <ArrowPathIcon className="h-6 text-white/50" />
                                <div>
                                    <p className="text-sm font-bold">3 hours 23 minutes</p>
                                    <p className="text-xs">
                                        {isEnabled
                                            ? "Saved with Auto Pilot"
                                            : "Could have been saved"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="min-w-0 min-h-0 flex flex-col justify-center gap-8 overflow-hidden bg-white/10 rounded-xl px-3 cursor-pointer"
                            onClick={() => setFocus((prev) => !prev)}
                        >
                            <div className="flex justify-between">
                                <InboxStackIcon className="h-6 text-white/50" />
                                <EyeIcon className="h-5 text-white/70" />
                            </div>
                            <div>
                                <p className="text-sm font-bold mb-1">Current deals</p>
                                <p className="text-xs">View ongoing deals</p>
                            </div>
                        </div>
                        <div className="min-w-0 min-h-0 flex flex-col justify-center gap-8 overflow-hidden bg-white/10 rounded-xl px-3">
                            <div className="flex justify-between">
                                <Cog8ToothIcon className="h-6 text-white/50" />
                                <PencilSquareIcon className="h-5 text-white/70" />
                            </div>
                            <div>
                                <p className="text-sm font-bold mb-1">Outgoing email configs</p>
                                <p className="text-xs">Modify outgoing email settings</p>
                            </div>
                        </div>
                        <div className="min-w-0 min-h-0 flex flex-col justify-center gap-8 overflow-hidden bg-white/10 rounded-xl px-3">
                            <div className="flex justify-between">
                                <UserGroupIcon className="h-6 text-white/50" />
                                <PencilSquareIcon className="h-5 text-white/70" />
                            </div>
                            <div>
                                <p className="text-sm font-bold mb-1">Manage team</p>
                                <p className="text-xs">Add edit or remove a member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Workspace Section */}

            <div
                className={cn(
                    "absolute left-0 right-0 bottom-0 px-7 flex flex-col text-white transition-transform duration-500 ease-out",
                    focus ? "-translate-y-15 h-[calc(100vh-100px)]" : "translate-y-120"
                )}
            >
                {!focus && (
                    <div>
                        <div className="px-2 mb-5 font-semibold">
                            <p>Workspace by Category</p>
                        </div>
                    </div>
                )}
                <div className="w-full min-h-[35px] text-sm flex items-center px-2">
                    <ul className="h-full flex gap-7">
                        <li
                            className={cn(
                                category === "Leads"
                                    ? "flex flex-col justify-between items-center cursor-default"
                                    : "flex flex-col justify-between items-center cursor-pointer"
                            )}
                            onClick={() => setCategory("Leads")}
                        >
                            <div className="flex items-center gap-2">
                                <QueueListIcon className="h-3 mt-[1px]" /> Leads
                            </div>
                            <div
                                className={cn(
                                    category === "Leads"
                                        ? "h-1.5 w-3 bg-green-400 rounded-tr-xs rounded-tl-xs"
                                        : "h-1.5 w-3 bg-transparent rounded-tr-xs rounded-tl-xs"
                                )}
                            />
                        </li>
                        <li
                            className={cn(
                                category === "Deals"
                                    ? "flex flex-col justify-between items-center cursor-default"
                                    : "flex flex-col justify-between items-center cursor-pointer"
                            )}
                            onClick={() => setCategory("Deals")}
                        >
                            <div className="flex items-center gap-2">
                                <InboxStackIcon className="h-3 mt-[1px]" /> Deals
                            </div>
                            <div
                                className={cn(
                                    category === "Deals"
                                        ? "h-1.5 w-3 bg-green-400 rounded-tr-xs rounded-tl-xs"
                                        : "h-1.5 w-3 bg-transparent rounded-tr-xs rounded-tl-xs"
                                )}
                            />
                        </li>
                        <li
                            className={cn(
                                category === "Email"
                                    ? "flex flex-col justify-between items-center cursor-default"
                                    : "flex flex-col justify-between items-center cursor-pointer"
                            )}
                            onClick={() => setCategory("Email")}
                        >
                            <div className="flex items-center gap-2">
                                <EnvelopeIcon className="h-3 mt-[1px]" />
                                Email
                            </div>
                            <div
                                className={cn(
                                    category === "Email"
                                        ? "h-1.5 w-3 bg-green-400 rounded-tr-xs rounded-tl-xs"
                                        : "h-1.5 w-3 bg-transparent rounded-tr-xs rounded-tl-xs"
                                )}
                            />
                        </li>
                        <li
                            className={cn(
                                category === "Team"
                                    ? "flex flex-col justify-between items-center cursor-default"
                                    : "flex flex-col justify-between items-center cursor-pointer"
                            )}
                            onClick={() => setCategory("Team")}
                        >
                            <div className="flex items-center gap-2">
                                <UserGroupIcon className="h-3 mt-[1px]" />
                                Team Management
                            </div>
                            <div
                                className={cn(
                                    category === "Team"
                                        ? "h-1.5 w-3 bg-green-400 rounded-tr-xs rounded-tl-xs"
                                        : "h-1.5 w-3 bg-transparent rounded-tr-xs rounded-tl-xs"
                                )}
                            />
                        </li>
                        <li
                            className={cn(
                                category === "Pilot"
                                    ? "flex flex-col justify-between items-center cursor-default"
                                    : "flex flex-col justify-between items-center cursor-pointer"
                            )}
                            onClick={() => setCategory("Pilot")}
                        >
                            <div className="flex items-center gap-2">
                                <CpuChipIcon className="h-3 mt-[1px]" />
                                Auto Pilot
                            </div>
                            <div
                                className={cn(
                                    category === "Pilot"
                                        ? "h-1.5 w-3 bg-green-400 rounded-tr-xs rounded-tl-xs"
                                        : "h-1.5 w-3 bg-transparent rounded-tr-xs rounded-tl-xs"
                                )}
                            />
                        </li>
                    </ul>
                </div>
                <div className="h-[calc(100vh-100px)] bg-gray-200 rounded-lg py-3 px-2">
                    <p className="text-black " onClick={() => setFocus((prev) => !prev)}>
                        Focus off
                    </p>
                </div>
            </div>
        </div>
    );
};
