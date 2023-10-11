export const IconBoard = (props) => {
  const { ...attrs } = props;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      fill="currentColor"
      {...attrs}
    >
      <path d="M5.187 8.738v3.985l4.883-3.157v8.217l1.925 1.111 1.926-1.111V9.57l4.882 3.158V8.742l-6.808-4.269-6.808 4.265zM12 0l10.375 5.999V18L12 24 1.625 18.006V6.003L12 0z" />
    </svg>
  );
};
