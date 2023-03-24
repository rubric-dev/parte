export type PaginationButtonProps = {
  page: number | string;
  isSelected: boolean;
  disabled?: boolean;
  onPageChange: (page: number) => void;
  children: React.ReactNode;
};

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
