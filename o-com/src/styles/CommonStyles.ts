import stylex from "@stylexjs/stylex";

export const CommonStyles = stylex.create({
  main: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // 태블릿
    "@media (max-width: 768px)": {
      width: "100%",
    },
    // 모바일
    "@media (max-width: 480px)": {
      width: "100%",
    },
  },
});
