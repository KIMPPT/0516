import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addmemo, changeheart, deletememo } from "../slice/memoSlice";
import { addlikelist, deletelikelist } from "../slice/memoLikeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as whiteHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as blackHeart } from "@fortawesome/free-solid-svg-icons";
export default function MemoComp() {
  let memo = useSelector((state) => state.memo);
  let memolike = useSelector((state) => state.memolike);
  let dispatch = useDispatch();
  let [intext, setIntext] = useState("");
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let now = `${year}-${month}-${day}`;
  /*
  console.log(memolike);
  console.log(memo);
  */
  useEffect(() => {
    console.log(memolike);
    console.log(memo);
  }, [memo]);
  return (
    <div>
      <h1>메모장</h1>
      <input
        type="text"
        onChange={(e) => setIntext(e.target.value)}
        value={intext}
        className="inputText"
      />
      <button
        onClick={() => {
          dispatch(addmemo({ text: intext, date: now, heart: false }));
          setIntext("");
        }}
        className="addButton"
      >
        추가
      </button>
      {/*text,년-월-일,하트모양버튼,x버튼 */}
      {memo.map((m, index) => (
        <div key={m.id}>
          <h3>{m.text}</h3>
          <span>{m.date}</span>
          <button
            onClick={() => {
              dispatch(changeheart(index));
              //위의 changeheart로 값이 바뀌고 그다음에 삼항연산자로 들어가기 때문에 값을 헷갈리지 말것
              !m.heart
                ? dispatch(
                    addlikelist({ text: m.text, date: now, heart: true })
                  )
                : dispatch(deletelikelist(m.text));
            }}
          >
            {m.heart ? (
              <FontAwesomeIcon
                icon={blackHeart}
                style={{ color: "#ff0000" }}
                beatFade
              />
            ) : (
              <FontAwesomeIcon icon={whiteHeart} />
            )}
          </button>
          <button
            className="deleteButton"
            onClick={() => {
              dispatch(deletememo(index));
              dispatch(deletelikelist(m.text));
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
