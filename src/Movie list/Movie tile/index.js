<<<<<<< HEAD
import {
  Tile,
  Image,
  Tag,
  Tags,
  Title,
  Subtitle,
  MoviesTile
} from "./styled"
import poster from "../../images/poster.png";

<Header>Popular movies</Header>;

return MoviesPage(
  <Tile>
    <MoviesTile>
    <Image src={poster} alt="" />
    <Title>Mulan</Title>
    <Subtitle>2020</Subtitle>
    <Tags>
      <Tag>Action</Tag>
      <Tag>Action</Tag>
      <Tag>Action</Tag>
    <Tags>
    </MoviesTile>
  </Tile>
=======
import * as styled from "./styled";
import poster from "../../images/poster.png";

<styled.Header>Popular movies</styled.Header>;

return MoviesPage(
  <styled.Tile>
    <styled.TileImage src={poster} alt="" />
    <styled.TileTitle>Mulan</styled.TileTitle>
    <styled.TileSubtitle>2020</styled.TileSubtitle>
    <styled.TileTags>
      <styled.TileTag>Action</styled.TileTag>
      <styled.TileTag>Action</styled.TileTag>
      <styled.TileTag>Action</styled.TileTag>
    </styled.TileTags>
  </styled.Tile>
>>>>>>> 146fc696e34c7772778d0aaa4273870ae2653891
);

export default MoviesPage;
