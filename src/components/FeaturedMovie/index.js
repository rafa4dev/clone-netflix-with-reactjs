import React from 'react';
import * as S from './styled';

const FeaturedMovie = ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    return (
        <S.Featured style={{
            backgroundSize: 'cover',
            backgroundPositon: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <S.FeaturedVertical>
                <S.FeaturedHorizontal>
                    <S.FeaturedName>{item.original_name}</S.FeaturedName>
                    <S.FeaturedInfo>
                        <S.FeaturedPoints>{item.vote_average}</S.FeaturedPoints>
                        <S.FeaturedYear>{firstDate.getFullYear()}</S.FeaturedYear>
                        <S.FeaturedSeasons>{item.number_of_seasons} temporada{item.number_of_seasons <= 1 ? '' : 's'}</S.FeaturedSeasons>
                    </S.FeaturedInfo>
                    <S.FeaturedDescription>
                        {item.overview}
                    </S.FeaturedDescription>
                    <S.FeaturedButtons>
                        <a href={`/watch/${item.id}`} class="featured--watchbutton">Assistir</a>
                        <a href={`/list/add/${item.id}`} class="featured--mylistbutton">+ Minha lista</a>
                    </S.FeaturedButtons>
                    <S.FeaturedGenres><strong>Gêneros: </strong> {genres.join(', ')}</S.FeaturedGenres>
                </S.FeaturedHorizontal>
            </S.FeaturedVertical>
        </S.Featured>
    );
}

export default FeaturedMovie;