import styled from "styled-components";

export const MovieRow = styled.div`
    margin-bottom: 30px;

    h2{
        margin: 0px 0px 0px 30px;
    }

    .movieRow--left,
    .movieRow--right {
        position: absolute;
        width: 40px;
        height: 225px;
        background-color: rgba(0,0,0,0.6);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
        transition: all ease 0.5s;

        @media(max-width:760px) {
            opacity: 1;
        }
    }

    .movieRow--left{
        left: 0;
    }
    .movieRow--right {
        right: 0;
    }

    &:hover .movieRow--left,
    &:hover .movieRow--right{
        opacity: 1;
    }
`;

export const MovieRowListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;

   
`;

export const MovieRowList = styled.div`
    transition: all ease 0.1s;
`;

export const MovieRowItem = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;

    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;

        &:hover{
            transform: scale(1);
        }
    }

    
`;