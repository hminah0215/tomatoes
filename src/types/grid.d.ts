type GridGap = {
  x: number;
  y: number;
};

type GridViewProps<T> = {
  items: T[];
  GridItem: React.ComponentType<{ item: T }>;
  columns: {
    mobile: number;
    web: number;
  };
  gaps: {
    mobile: GridGap;
    web: GridGap;
  };
};
