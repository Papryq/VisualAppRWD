import { useEffect, useState } from "react";

export default function useOutsideClick(ref) {
    const [isClicked, setIsClicked] = useState();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsClicked(true);
            } else {
                setIsClicked(false)
            }
        }

        // Checking if the clicked place is in the selected element and update the isClicked value and return
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }

    }, [ref])

    return isClicked
}