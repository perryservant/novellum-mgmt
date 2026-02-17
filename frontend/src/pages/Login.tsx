import { useState } from "react";
import { Input } from "../components/common/Input";
import { Button } from "../components/common/Button";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [step, setStep] = useState<"email" | "password">("email");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, isLoading } = useAuthStore();
    const navigate = useNavigate();

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError("Please enter your email");
            return;
        }
        setStep("password");
        setError("");
    };

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            await login(email, password);
            navigate("/");
        } catch (error) {
            setError(error instanceof Error ? error.message : "Login failed");
        }
    };

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
                    {error && (
                        <div className="bg-red-500/20 border border-red-500 text-red-100 px-3 py-2 rounded mb-4 text-sm">
                            {error}
                        </div>
                    )}

                    {step === "email" ? (
                        <form onSubmit={handleEmailSubmit} className="flex justify-between gap-4">
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
                                <Button type="submit">Next</Button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleLoginSubmit} className="flex justify-between gap-4">
                            <div className="flex-1">
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password"
                                />
                            </div>
                            <div className="flex">
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? "Logging in..." : "Login"}
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
                <div>
                    <p className="text-white/70 text-xs">
                        is simply dummy text of the printing and typesetting industry
                    </p>
                </div>
            </div>
        </div>
    );
};
