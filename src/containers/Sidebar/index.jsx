import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import Pagination from "../../components/pagination";
// import axios from "axios";
import "./sidebar.scss";

function Sidebar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [value, setValue] = useState();
  // const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (value) {
      navigate(`/search/${value}`);
    } else {
      navigate(`/movies`);
    }
  }, [value]);
  const formDefault = (e) => {
    e.preventDefault();
    navigate(`/search/${value}`);
  };
  // const inputValue = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <aside>
      {/* <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} /> */}
      <div className="intro">
        <form onSubmit={formDefault}>
          <input
            onChange={(e) => setValue(e.target.value)}
            type="search"
            placeholder={t("searchfilm")}
            value={value}
          />
          <button type="submit">{t("search")}</button>
        </form>
      </div>
    </aside>
  );
}

export default Sidebar;
