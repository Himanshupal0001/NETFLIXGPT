import { useEffect, useState } from "react"

function useMediaQuery() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const detectScreenSize = () => { setScreenSize(window.innerWidth); }
    useEffect(() => {
        detectScreenSize();
        window.addEventListener('resize', detectScreenSize);
        return () => { window.removeEventListener('resize', detectScreenSize) };
    });

    return { screenSize }
}

export default useMediaQuery
