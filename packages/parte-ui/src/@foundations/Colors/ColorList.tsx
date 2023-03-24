import { Fragment } from "react";
import styled from "styled-components";
import { COLORS } from "./colors";

const CATEGORY = [
  "Neutral",
  "Blue",
  "Green",
  "Yellow",
  "Red",
  "Violet",
  "Teal",
  "Pink",
  "Orange",
  "Chart",
];

export function ColorList() {
  const colorMap = Object.entries(COLORS).reduce((acc, [key, value]) => {
    const colorCategory = key[0];
    if (acc[colorCategory]) {
      acc[colorCategory].push({ [key]: value });
    } else {
      acc[colorCategory] = [{ [key]: value }];
    }
    return acc;
  }, {} as Record<string, Record<string, string>[]>);

  return (
    <Container>
      {CATEGORY.map((letter) => (
        <Fragment key={letter}>
          <Title>{letter}</Title>
          <List>
            {colorMap[letter[0]]?.map((color) => {
              const [key, value] = Object.entries(color)[0];
              return (
                <Item key={value} color={value}>
                  <Name>{key}</Name>
                  <ColorCode>{value}</ColorCode>
                </Item>
              );
            })}
          </List>
        </Fragment>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
`;

const Title = styled.h2`
  color: #4f4f4f;
`;

const List = styled.div`
  display: grid;
  gap: 16px;
  grid-template-rows: minmax(100px);
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
`;

const Item = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.2);
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 8px;
`;

const Name = styled.h4`
  padding: 0;
  margin: 0;
`;

const ColorCode = styled.p`
  margin: 0;
`;
