import styled from "styled-components";
import { Loader } from "../Loader";
import { Navigation } from "../Navigation";

interface Props {
    isLoading: boolean;
    children: JSX.Element;
}

const StyledLayout = styled.main`
    color: var(--clr-text);
    top: 0;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: auto;
    padding: 2em;

    @media (max-width: 700px) {
    justify-content: right;
    height: auto;
    }

    @media (max-width: 500px) {
    padding: 1em;
    }
`;

export default function Layout({ isLoading, children }: Props) {
    return (
        <>
            {isLoading ? (<Loader />) : (<StyledLayout>{children}</StyledLayout>)}
            <Navigation />
        </>
    );
}