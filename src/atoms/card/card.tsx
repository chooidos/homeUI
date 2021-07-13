import { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

const CardRoot = styled.article`
  box-sizing: border-box;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgb(0 0 0 / 5%);
`;

const Headline = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;

interface Props {
  title: string,
  children: string | ReactNode,
}

export const Card = forwardRef<HTMLInputElement, Omit<JSX.IntrinsicElements, 'ref'> & Props>(
  ({ style, className, title, children }: Props, ref) => (
    <CardRoot style={style} className={className} ref={ref}>
      <Headline>{title}</Headline>
      <div>
        {children}
      </div>
    </CardRoot>
  ));
