import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addmemo, changeheart, deletememo } from "../slice/memoSlice";
import { addlikelist, deletelikelist } from "../slice/memoLikeSlice";
export default function MemoComp() {
  let memo = useSelector((state) => state.memo);
  let memolike = useSelector((state) => state.memolike);
  let dispatch = useDispatch();
  let [intext, setIntext] = useState("");
  let [heart, setHeart] = useState(false);
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let now = `${year}-${month}-${day}`;
  console.log(memolike);
  console.log(memo);
  return (
    <div>
      <h1>메모장</h1>
      <input
        type="text"
        onChange={(e) => setIntext(e.target.value)}
        value={intext}
      />
      <button
        onClick={() => {
          dispatch(addmemo({ text: intext, date: now, heart: heart }));
          setIntext("");
        }}
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
              !m.heart
                ? dispatch(
                    addlikelist({ text: m.text, date: now, heart: true })
                  )
                : dispatch(deletelikelist(m.text));
            }}
          >
            {m.heart ? "♥" : "♡"}
          </button>
          <button onClick={() => dispatch(deletememo(index))}>X</button>
        </div>
      ))}
    </div>
  );
}
