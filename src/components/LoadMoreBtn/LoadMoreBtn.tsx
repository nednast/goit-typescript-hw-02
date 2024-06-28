import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

type Prop = {
  onClick: () => void;
};

const LoadMoreBtn: FC<Prop> = ({ onClick }) => {
  return (
    <button className={css.btnLoadMore} type="button" onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
