function FilterBtn({ children, onClick }) {
  return (
    <button
      className="bg-Light-Grayish-Cyan-(Filter-Tablets) text-Desaturated-Dark-Cyan font-semibold py-1 px-2 rounded-lg hover:bg-Desaturated-Dark-Cyan hover:text-white transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FilterBtn;
