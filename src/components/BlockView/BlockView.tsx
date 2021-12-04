import { useParams } from "react-router-dom";

export default function BlockView() {
    const { blockNr } = useParams();
    
    return (
        <h1>Block {blockNr}</h1>
    );
}