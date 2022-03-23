import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearSearchHistory, removeSearchHistoryItem } from "../redux/actions";

interface SearchHistoryItemProps {
  index: number;
  movieTitle: string;
}

const SearchHistoryItem = (props: SearchHistoryItemProps) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <section className="flex items-center justify-between">
      <p
        className="cursor-pointer"
        onClick={() => {
          navigate(`film/${props.movieTitle}`);
        }}
      >
        {props.movieTitle}
      </p>
      <button onClick={() => dispatch(removeSearchHistoryItem(props.index))}>
        x
      </button>
    </section>
  );
};

const SearchHistory = () => {
  let dispatch = useDispatch();

  // get previous seach history from redux store
  const previousSearchHistory: string[] = useSelector(
    (state: any) => state.searchHistory
  );

  return (
    <div>
      <section className="flex justify-between items-center">
        <h2 className="font-bold">Recent history</h2>

        <>
          {previousSearchHistory.length === 0 ? (
            <p />
          ) : (
            <button
              className="text-blue-600"
              onClick={() => dispatch(clearSearchHistory())}
            >
              Clear all
            </button>
          )}
        </>
      </section>

      <ul className="pt-3">
        {previousSearchHistory.map((movieTitle, index) => (
          <li key={movieTitle}>
            <SearchHistoryItem index={index} movieTitle={movieTitle} />
          </li>
        ))}
      </ul>

      <>
        {previousSearchHistory.length === 0 && (
          <section className="flex justify-center">
            <p>No history found</p>
          </section>
        )}
      </>
    </div>
  );
};

export default SearchHistory;
