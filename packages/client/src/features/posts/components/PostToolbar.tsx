import React, {FC, useContext} from 'react';
import EditPostButton from "./EditPostButton";
import DeletePostButton from "./DeletePostButton";
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {PostContext} from "../store/postContext";

const PostToolbar: FC = () => {
  const postCtx = useContext(PostContext)

  return (
    <>
      <BlogSimpleCard sxProps={{flexDirection: "row", mb: 2}}>
        <EditPostButton isShown={true}/>
        <DeletePostButton isShown={!postCtx?.editMode} post={postCtx?.post} navigateTo={'/feed'}/>
      </BlogSimpleCard>
    </>
  );
};

export default PostToolbar;
