import React, {FC} from 'react';
import EditPostButton from "./EditPostButton";
import DeletePostButton from "./DeletePostButton";
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {Post} from "../models/postModels";

const PostToolbar: FC<{post: Post | undefined, setIsEditMode: () => void}> = (
  {post, setIsEditMode}
) => {


  return (
    <>
      <BlogSimpleCard sxProps={{flexDirection: "row", mb: 2}}>
        <EditPostButton isShown={true} cb={() => setIsEditMode()}/>
        <DeletePostButton isShown={true} post={post} navigateTo={'/feed'}/>
      </BlogSimpleCard>
    </>
  );
};

export default PostToolbar;
