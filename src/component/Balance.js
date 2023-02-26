import styled from "styled-components";

export default function Balance({ balance }) {
  return (
    <BlockTag>
      <Money1>{balance}$</Money1>
    </BlockTag>
  );
}

const BlockTag = styled.div`
  /* робимо ширину на весь екран */
  width: 100%;

  /* робимо відступи по боках та зверху, 
  щоб задати потрібний розмір нашого блоку
  */
  padding: 150px 30px;

  /* вмикаємо режим верстки flex, 
  робимо текст по центру вертикально та горизонтально 
  */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Money1 = styled.div`
  /* задаємо розмір тексту */
  font-size: 78px;

  /* задаємо колір тексту */
  color: blueviolet;
`;
