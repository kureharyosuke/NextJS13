// BeforeLayout

export const BeforeLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <main>
      애프터 레이아웃
      {children}
      {modal}
    </main>
  );
};
