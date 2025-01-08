import { useGlobalContext } from "../context/GlobalContext";
import closeBtn from "/images/icon-remove.svg";
function TopFilterBtn({ item }) {
  const { handleDeleteFilter } = useGlobalContext();
  return (
    <div className="flex items-center">
      <div className="bg-Light-Grayish-Cyan-(Filter-Tablets) text-Desaturated-Dark-Cyan font-semibold py-1 px-2 rounded-lg hover:bg-Desaturated-Dark-Cyan rounded-s-lg rounded-e-none">
        {item.name}
      </div>
      <button onClick={() => handleDeleteFilter(item)}>
        <img
          src={closeBtn}
          alt="close button"
          width={32}
          height={32}
          className="px-2 py-2 transition-colors duration-300 rounded-s-none rounded-e-lg bg-Desaturated-Dark-Cyan hover:bg-Very-Dark-Grayish-Cyan"
        />
      </button>
    </div>
  );
}

export default TopFilterBtn;
