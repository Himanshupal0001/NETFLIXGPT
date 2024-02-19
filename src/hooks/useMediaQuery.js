import { useLayoutEffect, useRef, useState } from "react"

function useMediaQuery() {
    const ref = useRef(null)
    const [screenSize, setScreenSize] = useState(0);
    const detectScreenSize = () => { setScreenSize(ref.current.offsetWidth); }
    useLayoutEffect(() => {
        detectScreenSize();
        window.addEventListener('resize', detectScreenSize);
        return () => { window.removeEventListener('resize', detectScreenSize) };
    }, []);

    return { ref, screenSize }
}

export default useMediaQuery
