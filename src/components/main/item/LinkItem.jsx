const LinkItem = ({ href, text }) => (
  <a
    href={href}
    className="hover:text-white hover:underline hover:underline-offset-1"
  >
    {text}
  </a>
);

export default LinkItem;
