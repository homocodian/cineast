function useData() {
  return Array.from(Array(24).keys()).map((item) => ({
    id: item,
    imageUrl: `https://source.unsplash.com/random/176x240?sig=${item}`,
    likes: (item * 10) / 100,
    title: `Random name ${item}`,
  }));
}

export default useData;
