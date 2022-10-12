export const getPostList = rawPost => {
  return rawPost.map(({ title, firstimage, addr1 }) => {
    return {
      title: title,
      firstimage: firstimage,
      addr1: addr1,
    };
  });
};
