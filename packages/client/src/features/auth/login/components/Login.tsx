import React, {FC} from 'react';
import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import LoginForm from './LoginForm';
import {QueryFixedCacheKeysENUM} from "../../../../common/constants/queryCacheKeys";
import BlogFullCoveringSpinner from "../../../../common/components/ui/BlogFullCoveringSpinner";
import BlogSimpleCard from "../../../../common/components/ui/BlogSimpleCard";
import BlogTitle from "../../../../common/components/ui/BlogTitle";
import {baseAuthApi} from "../../baseAuth/store/api/api";

const Login: FC = () => {
  const [, {isLoading}] = baseAuthApi.useLoginUserMutation({
    fixedCacheKey: QueryFixedCacheKeysENUM.LOGIN_USER,
  })

  return (
    <Box sx={{
      position: 'absolute',
      top: '50%',
      right: '50%',
      transform: 'translate(50%, -50%)',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      <BlogSimpleCard>
        <BlogTitle title={'Login'} variant='h4'/>
        <LoginForm/>
        <Link to='/registration'>Create account</Link>
        <BlogFullCoveringSpinner isLoading={isLoading}/>
      </BlogSimpleCard>
    </Box>
  );
};

export default Login;
