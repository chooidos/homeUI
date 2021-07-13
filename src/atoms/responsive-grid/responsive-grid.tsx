import { forwardRef } from 'react';

import { Responsive, ResponsiveGridLayoutProps } from 'react-grid-layout';
import { Card } from "../card/card";

const ResizeHandle = forwardRef((props, ref) => (
  <div
    style={{ ...props.style, height: 32, width: 32 }}
    className={`react-resizable-handle handle-${props.handleAxis}`}
    ref={ref}
    {...props}
  >
    {">"}
  </div>
));

export const ResponsiveGrid = (props: ResponsiveGridLayoutProps) => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];
  const layouts = {
    lg: layout,
    md: layout,
    sm: layout,
    xs: layout,
    xxs: layout,
  };

  return (
    <Responsive
      className="layout"
      layouts={layouts}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
      rowHeight={30}
      width={1200}
      isDraggable
      isResizable
      compactType="horizontal"
    >
      <Card key="a" title="a">1</Card>
      <Card key="b" title="b">2</Card>
      <Card key="c" title="c">3</Card>
    </Responsive>
  );
}
