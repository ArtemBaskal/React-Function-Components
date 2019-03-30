import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard"

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Artem"
          timeAgo="Today At 5:56PM"
          content="Awesome!"
        />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Michael"
        timeAgo="Yesterday At 7:06AM"
        content="Sweet!"
      />
    </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
