import React from 'react';
import { HeaderBar } from '../../../../components/HeaderBar';
import * as S from './styled';
import { NavBar } from '../NavBar';

export const Layout = () => {
  return (
    <>
      <HeaderBar></HeaderBar>
      <S.Wrapper>
        <NavBar></NavBar>
        <main>
          <section>
            <p>4</p>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </section>
          <section>
            <p></p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </section>
        </main>
      </S.Wrapper>
    </>
  );
};
