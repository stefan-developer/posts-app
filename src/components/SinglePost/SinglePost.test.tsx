import React from "react";
import { render, screen } from "@testing-library/react";
import SinglePost from "./SinglePost.component";

test("When parent 'SinglePost' component is rendered, child component 'Comments' is rendered as well", () => {
  const mockPostObj = {
    id: 1,
    userId: 1,
    userName: "Stefan",
    title: "Post 1",
    body: "This is my first post.",
    comments: [
      {
        postId: 1,
        id: 1,
        name: "Comment 1",
        body: "This is my first comment about recently added post.",
        email: "stefan@test.com",
      },
    ],
  };

  render(<SinglePost post={mockPostObj} message="Render first post" />);

  const commentBody = screen.getByText(
    "This is my first comment about recently added post."
  );

  expect(commentBody).toBeInTheDocument();
});
