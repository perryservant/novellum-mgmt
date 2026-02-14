import { useState } from "react";
import { Input } from "../components/common/Input";
import { Button } from "../components/common/Button";

export const Login = () => {
    const [email, setEmail] = useState("");

    return (
        <div className="relative h-screen w-screen flex justify-center items-center">
            <div className="absolute h-full w-full">
                <img
                    src="/1b1cee54b85363f4152a7d9454881532.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-[500px] h-[300px] flex flex-col justify-between bg-white/10 backdrop-blur-sm rounded-lg py-10 px-10 z-2">
                <div className="flex justify-center">
                    <img className="h-[60px]" src="/g3.svg" alt="Logo" />
                </div>
                <div>
                    <form className="flex justify-between gap-4">
                        <div className="flex-1">
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email"
                            />
                        </div>
                        <div className="flex">
                            <Button type="submit">Login</Button>
                        </div>
                    </form>
                </div>
                <div>
                    <p className="text-white/70 text-xs">
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>
        </div>
    );
};
