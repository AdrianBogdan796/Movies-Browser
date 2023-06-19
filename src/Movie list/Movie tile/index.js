import {
  Tile,
  TileTitle as Title,
  TileSubtitle as Subtitle,
  TileTag as Tag,
  TileTags as Tags,
} from "../../components/Tile";
import { MoviesPage } from "../features/movies/MoviesPage";
import poster from "./images/poster.png";

<Title> Popular movies </Title>;
function MoviesPage() {
  return (
    <>
      <Tile>
        <Image src={poster} alt="" />
        <Title>Mulan</Title>
        <Subtitle>2020</Subtitle>
        <Tags>
          <Tag>Action</Tag>
          <Tag>Action</Tag>
          <Tag>Action</Tag>
        </Tags>
      </Tile>
    </>
  );
}

export default MoviesPage;
