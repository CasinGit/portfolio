import { createContext, PropsWithChildren, useEffect, useState } from "react";

type posType = { topContent: number, AboutMe: number, Skills: number, Projects: number, Careers: number }
type TocContextType = {
    pos: posType;
    setPos: React.Dispatch<React.SetStateAction<posType>>;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
};
const TocContext = createContext<TocContextType | null>(null);

export function TocContextProvider({ children }: PropsWithChildren) {
    const [pos, setPos] = useState({
        topContent: 0,
        AboutMe: 0,
        Skills: 0,
        Projects: 0,
        Careers: 0,
    });
    const [active, setActive] = useState(0);

    useEffect(() => {
        console.log("TOC CONTEXT =>", pos);
    }, [pos])

    return (
        <TocContext.Provider value={{ pos, setPos, active, setActive }}>
            {children}
        </TocContext.Provider>
    )
}

export default TocContext;