import styled from 'styled-components';

const commons = `
    display: inline-block;
    margin-right: 15px;

`;

export const Featured = styled.section`
    height: 80vh;
`;

export const FeaturedVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 10%, transparent 90%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;
`;

export const FeaturedName = styled.div`
    font-size: 60px;
    font-weight: bold;
`;

export const FeaturedInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
`;

export const FeaturedPoints = styled.div`
    ${commons};
    color: #46d369;
`;

export const FeaturedYear = styled.div`
    ${commons}
`;

export const FeaturedSeasons = styled.div`
    ${commons}
`;

export const FeaturedDescription = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
`;


export const FeaturedButtons = styled.div`
    margin-top: 15px;

    a{
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 12px 25px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;
        transition: all ease 0.2;

        &:hover {
            opacity: 0.8;
        }
    }

    a.featured--watchbutton{
        background-color: #fff;
        color: #000;
    }

    a.featured--mylistbutton {
        background-color: #333;
        color: #fff;
    }
`;

export const FeaturedGenres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;
`;