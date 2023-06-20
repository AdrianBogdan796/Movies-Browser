import { styled } from "styled-components";

export const Tile = styled.article`
  height: 650px;
  width: 1368px;
  left: 276px;
  top: 217px;
  border-radius: 0px;
`;

export const MoviesTile = styled.article`
  height: 650px;
  width: 324px;
  left: 0px;
  top: 0px;
  border-radius: 5px;
  fill: solid;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Image = styled.img`
  position: absolute;
  width: 292px;
  height: 434px;
  left: 16px;
  top: 16px;

  background: url(Mulan.jpg);
  border-radius: 5px;
`;

export const Title = styled.header`
  width: 292px;
  height: 29px;
  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
`;

export const Subtitle = styled.div`
  width: 39px;
  height: 24px;
  color: #7e839a;
  flex: none;
  order: 1;
  align-self: flex-start;
  flex-grow: 0;
`;

export const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 279px;
  height: 36px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Tag = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;

  width: 77px;
  height: 36px;
  background: #e4e6f0;
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
