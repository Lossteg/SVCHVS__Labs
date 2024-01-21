import { useState } from "react";
import {
  addCommentAction,
  getPostAction,
  getComPostsAction,
  getOwnPostAction,
} from "../../redux/actions/postActions";
import { useDispatch } from "react-redux";

const CommentForm = ({ communityId, postId }) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      content,
      postId,
    };
    try {
      setIsLoading(true);
      await dispatch(addCommentAction(postId, newComment));
      await dispatch(getPostAction(postId));
      await dispatch(getOwnPostAction(postId));

      setIsLoading(false);
      setContent("");

      await dispatch(getComPostsAction(communityId));
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={500}
            required
            placeholder="Write a comment..."
          />
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
            disabled={isLoading}
            style={{
              opacity: isLoading ? 0.5 : 1,
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
          >
            {isLoading ? "Loading..." : "Comment"}
          </button>
        </div>
      </form>
  );
};

export default CommentForm;
