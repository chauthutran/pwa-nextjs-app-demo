"use client";

import { checkLogin } from "@/app/api";
import { KeyboardEvent, useState } from "react";
import Alert from "./basics/Alert.component";
import * as Constant from "@/app/constants";
import { createMessage } from "../utils";
import useAppHook from "../features/hooks";
import { FaKey } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import SecondaryButton from "./basics/SecondaryButton.component";
import PrimaryButton from "./basics/PrimaryButton.component";
import SpecButton from "./basics/SpecButton.component";


export default function Login() {

    const { setLoginUserData, setMainUi } = useAppHook();

    const [message, setMessage] = useState(createMessage());
    const [username, setUsername] = useState("test1");
    const [pin, setPin] = useState("1234");
 
    const handleOnLogin = async () => {
        if (username == "" || pin == "") {
            setMessage(createMessage(Constant.ALERT_TYPE_ERROR, "Please enter username/pin"));
        }
        else {
            setMessage(createMessage(Constant.ALERT_TYPE_WARNNG, "Checking username and pin ..."));

            var userData = await checkLogin(username, pin);
            if (userData) {
                setMessage({ type: Constant.ALERT_TYPE_SUCCESS, msg: "Login successfully." });
                setLoginUserData(userData);
                setMainUi(Constant.UI_CLIENT_LIST);
            }
            else {
                setMessage(createMessage(Constant.ALERT_TYPE_ERROR, "Login failed."));
            }
        }

    };

    const handleOnClear = () => {
        setMessage(createMessage());
        setUsername("");
        setPin("");
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleOnLogin()
        }
    }

    return (
        <div className="flex items-center justify-center main-view">
            <div className="flex flex-col p-20 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center">

                {message.msg != "" && <Alert type={message.type} message={message.msg} />}

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                <div>

                    <div className="relative flex items-center">
                        <FaUser  className="absolute left-3 text-gray-400" />
                        <input
                            className="pl-10 pr-4 py-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value); setMessage(createMessage()) }}
                            onKeyDown={handleKeyDown}
                            required
                        />
                    </div>

                    <div className="relative flex items-center my-3">
                        <FaKey className="absolute left-3 text-gray-400" /> <input
                            id="pin"
                            className="pl-10 pr-4 py-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            value={pin}
                            maxLength={4}
                            onChange={(e) => { setPin(e.target.value); setMessage(createMessage()) }}
                            onKeyDown={handleKeyDown}
                            required />
                    </div>

                    <div className="flex items-center justify-between">
                    
                        <SpecButton 
                            onClick={handleOnLogin}
                            label="Log-In"
                            clazz="w-2/5" />

                        <SecondaryButton
                            onClick={handleOnClear}
                            label="Reset" 
                            clazz="w-2/5" />

                    </div>

                </div>
            </div>
        </div>
    )
}