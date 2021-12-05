import { useParams } from "react-router-dom";
import useCurrentBlock from "../../hooks/useCurrentBlock";
import { getAverageBlockTime } from "../../utils";
import { Countdown } from "../Countdown";

export default function BlockView() {
    const { blockNr } = useParams();
    const [currentBlock, isLoading] = useCurrentBlock();

    const getDateOfBlock = (block: number): Date => {
        const remainingBlocks = block - currentBlock;
        const averageBlockTime = getAverageBlockTime(currentBlock);
        const timeUntilBlock = remainingBlocks * averageBlockTime;
        const blockDate = new Date(); 
        return new Date(blockDate.getTime() + 1000 * timeUntilBlock);
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    
    return (
        <>
            <h1>Block {blockNr}</h1>
            <Countdown date={getDateOfBlock(Number(blockNr))} />
        </>
    );
}