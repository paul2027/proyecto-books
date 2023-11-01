import { useCallback,useState,useEffect } from "react"
const useMediaQuery=(width)=>{
    const [targetReached, setTargetreached]=useState(false)
    const updateTarget=useCallback((event)=>{
        if (event.matches)setTargetreached(true)
        else setTargetreached(false)
    }, [])
    useEffect(()=>{
        const media=window.matchMedia(`(max-width: ${width}px)`)
        media.addEventListener('change',updateTarget)
        if (media.matches)setTargetreached(true)
        return ()=>media.removeEventListener('change',updateTarget)
    },[])
    return targetReached
}
export default useMediaQuery