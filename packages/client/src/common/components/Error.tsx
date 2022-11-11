import { Box, Button, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../store/hooks";

export default function Error() {

  const navigate = useNavigate()
  const {user} = useAppSelector(state => state.authReducer)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100%',
      }}
    >
      <Typography variant="h1" style={{ color: 'gray' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'gray' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button onClick={() => navigate(user ? '/feed' : 'login')}>{user ? 'Go To Main Page' : 'Login'}</Button>
    </Box>
  );
}
