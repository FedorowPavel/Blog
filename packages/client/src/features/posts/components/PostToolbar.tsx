import React, {FC} from 'react';
import EditPostButton from "./EditPostButton";
import DeletePostButton from "./DeletePostButton";
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {Post} from "../models/postModels";

const PostToolbar: FC<{post: Post | undefined, setIsEditMode: () => void, isEditMode: boolean}> = ({post, setIsEditMode, isEditMode}) => {
  return (
    <>
      <BlogSimpleCard sxProps={{flexDirection: "row", mb: 2}}>
        <EditPostButton isShown={true} cb={() => setIsEditMode()} isEditMode={isEditMode}/>
        <DeletePostButton isShown={true} post={post} navigateTo={'/feed'}/>
      </BlogSimpleCard>
    </>
  );
};

export default PostToolbar;
