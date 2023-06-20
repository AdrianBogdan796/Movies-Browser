import poster from "./images/poster.png";
import {
  Header,
  Tile,
  MoviesTile,
  Title,
  Subtitle,
  Tags,
  Tag,
  Image,
  Description,
  MoviesTileFrame,
} from "./Movie list/Movie tile/styled";

function MoviesPage() {
  return (
    <Tile>
      <Header>Popular movies</Header>
      <MoviesTile>
        <Image src={poster} alt="" />
        <MoviesTileFrame>
          <Description>
            <Title>Mulan</Title>
            <Subtitle>2020</Subtitle>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
            </Tags>
          </Description>
        </MoviesTileFrame>
      </MoviesTile>
    </Tile>
  );
}

export default MoviesPage;
