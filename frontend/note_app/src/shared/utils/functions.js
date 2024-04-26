export const extractTags = (text) => {
  const regex = /#\w+/g;
  const foundTags = text.match(regex) || [];
  const tagsWithoutHash = foundTags.map((tag) => {
    return { title: tag.substring(1) };
  });
  return tagsWithoutHash;
};
