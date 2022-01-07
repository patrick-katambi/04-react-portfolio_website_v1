function MenuLinks() {
  return (
    <>
      {["Landing", "Case studies & Projects", "Contact", "About me"].map(
        (menuItem, index) => {
          return (
            <p
              key={index}
              className={`${
                index === 0 ? "font-codeBold text-sm" : "font-codeLight"
              }`}
            >
              {menuItem}
            </p>
          );
        }
      )}
    </>
  );
}

export default MenuLinks