const scrollToTop = (containerRef: React.RefObject<HTMLDivElement>) => {
  if (containerRef.current) {
    containerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export default scrollToTop;
