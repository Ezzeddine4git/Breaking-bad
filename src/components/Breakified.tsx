import React from "react";

interface BreakifyProps {
    text:string[];
}

const Breakify: React.FC <BreakifyProps> = ({ text }) => {

    return (
        <div className="">
            <span className="text-white font-bold text-5xl">{text[0]}</span>
            {text[1] !== '' && <span className="text-white font-bold text-6xl bg-bb-green p-2">{text[1]}</span>}
            <span className="text-white font-bold text-5xl">{text[2]}</span>
        </div>
    )
}

export default Breakify;