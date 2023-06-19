import {
  Tile,
  TileImage as Image,
  TileTag as Tag,
  TileTags as Tags,
  TileTitle as Title,
} from "../src/components/Tile";
import { Container } from "./components/Container";
import poster from "./images/poster.png";

function MoviesPage() {
  return (
    <Container>
      <Tile>
        <Image src={poster} alt="" />
        <Title>Mulan</Title>
        <Tags>
          <Tag>Action</Tag>
          <Tag>Action</Tag>
          <Tag>Action</Tag>
        </Tags>
      </Tile>
    </Container>
  );
}

export default MoviesPage;
