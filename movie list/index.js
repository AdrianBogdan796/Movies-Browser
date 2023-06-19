import { Tile, TileTitle as Title } from "../src/components/Tile";
import { Container } from "./components/Container";

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
