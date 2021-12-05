import { useEffect, useState } from "react";
import { getStats } from "../api/defichain";
import { getAverageBlockTime } from "../utils";
import useLocalStorage from "./useLocalStorage";

export default function useCurrentBlock(): [number, boolean] {
    const [currentBlock, setCurrentBlock] = useLocalStorage("currentBlock", 0);
    const [isLoading, setIsLoading] = useState(true);
  
    const AVERAGE_BLOCK_TIME = getAverageBlockTime(currentBlock);
  
    useEffect(() => {
        const getCurrentBlock = async () => {
            setIsLoading(true);
            const stats = await getStats();
            setCurrentBlock(stats.data.count.blocks);
            setIsLoading(false);
        };
    
        getCurrentBlock();
    
        const interval = setInterval(() => {
            getCurrentBlock();
        }, AVERAGE_BLOCK_TIME * 1000);
        
        return () => clearInterval(interval);
    }, []);

    return [currentBlock, isLoading];
}