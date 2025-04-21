const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink || isAnchorLink) {
    // Enlaces internos o anclas
    return <a href={href} {...rest} />;
  }

  // Enlaces externos
  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;