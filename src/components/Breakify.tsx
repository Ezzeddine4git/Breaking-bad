import React, { useEffect } from "react";
import periodicElements from "../utils/PeriodicElements";
import Breakified from "./Breakified";

const Breakify = () => {
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [breakifiedFirstname, setBreakifiedFirstname] = React.useState(['', '', '']);
    const [breakifiedLastname, setBreakifiedLastname] = React.useState(['', '', '']);

    const reset = (e: React.MouseEvent) => {
        e.preventDefault();
        setFirstname('');
        setLastname('');
    };

    const breakify = (text: string): string[] => {
        for (let i = 0; i < text.length; i++) {
            let oneChar = text[i].toLocaleUpperCase();
            let twoChar = oneChar + text[i+1];

            if (periodicElements.includes(twoChar)) {
                let result = [text.slice(0, i) , twoChar, text.slice(i+2, text.length)];
                return result;
            }

            if (periodicElements.includes(oneChar)) {
                let result = [text.slice(0, i) , oneChar, text.slice(i+1, text.length)];
                return result;
            }
        }

        return [text, '', ''];
    }

    useEffect(() => {
        const v = breakify(firstname);
        setBreakifiedFirstname(v);
    }, [firstname]);

    useEffect(() => {
        const v = breakify(lastname);
        setBreakifiedLastname(v);
    }, [lastname]);

  return (
    <div className="p-8 -sm:p-2">
        <h1 className="text-bb-green font-bold text-7xl">Breakify</h1>
        <div className="p-8 mt-8 flex flex-col gap-8">
            <Breakified text={breakifiedFirstname} />
            <Breakified text={breakifiedLastname} />
        </div>
        <form className="sm:mr-auto sm:ml-auto -sm:w-full">
            <div className="p-8 flex items-center justify-center gap-2 -sm:flex-col -sm:w-full">
                <input className="p-2 rounded pointer focus:outline-none font-bold -sm:w-full" onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
                <input className="p-2 rounded pointer focus:outline-none font-bold -sm:w-full" onChange={(e) => setLastname(e.target.value)} value={lastname}/>
            </div>
            <button onClick={e => reset(e)} className="btn">Breakify</button>
        </form>
    </div>
  )
};

export default Breakify;