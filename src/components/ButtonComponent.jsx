import { Button, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";

function ButtonComponent() {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const [loading, setLoading] = useState(true);
  function handleClick() {
    setLoading(true);
  }
  return (
    <div>
        <Button 
          variant="text"
          color="error"
          size="small"
          >
            Text
        </Button>
        <Button 
          variant="contained"
          color="success"
          size={"large"}
          >
            Contained
        </Button>
        <Button 
          variant="outlined"
          color="warning"
          disabled
          startIcon={<DeleteIcon/>}
          endIcon={<SendIcon/>}
          >
            Outlined
        </Button>
        <br/>
        <IconButton 
          aria-label="delete"
          size="small"
          >
            <DeleteIcon fontSize="inherit"/>
        </IconButton>
        <IconButton 
          aria-label="delete" 
          disabled 
          color="primary"
          size="large"
          >
            <DeleteIcon fontSize="large"/>
        </IconButton>
        <IconButton 
          color="secondary" 
          aria-label="add an alarm"
          >
            <AlarmIcon />
        </IconButton>
        <IconButton
          color="primary" 
          aria-label="add to shopping cart"
          >
            <AddShoppingCartIcon />
        </IconButton>
        <br />
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
        <br />
        <Stack direction="row" spacing={2}>
          <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton>
          <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
            Fetch data
          </LoadingButton>
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            Save
          </LoadingButton>
        </Stack>
        <br />
        <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          size="small"
          onClick={handleClick}
          loading={loading}
          variant="outlined"
          disabled
        >
          <span>disabled</span>
        </LoadingButton>
        <LoadingButton
          size="small"
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          <span>Fetch data</span>
        </LoadingButton>
        <LoadingButton
          size="small"
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton>
        <LoadingButton
          size="small"
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </Box>

      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          onClick={handleClick}
          loading={loading}
          variant="outlined"
          disabled
        >
          <span>disabled</span>
        </LoadingButton>
        <LoadingButton
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          <span>Fetch data</span>
        </LoadingButton>
        <LoadingButton
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton>
        <LoadingButton
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </Box>
    </div>
  )
}

export default ButtonComponent