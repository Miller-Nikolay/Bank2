import styled from "styled-components";

export default function Header({ name, onClick }) {
  return <HeaderTag onClick={onClick}>-={name}=-</HeaderTag>;
}

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: blueviolet;

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: center;

  /* ставимо колір тексту білим */
  color: #fff;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 30px;
`;
