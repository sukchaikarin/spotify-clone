const RightClickProtect = ({ children }) => {
  const handleContextMenu = (event) => {
    event.preventDefault(); // ป้องกันเมนูคอนเท็กซ์จากการปรากฎขึ้น
  };

  return <div onContextMenu={handleContextMenu}>{children}</div>;
};

export default RightClickProtect;
