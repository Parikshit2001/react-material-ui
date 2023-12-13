import { Button, TextField } from "@mui/material"
import { useState } from "react"

const styles = {
  mt: 2
}

function TextFieldComponent() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && details) {
      console.log(title);
      console.log(details);
    }
  }

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          sx = {styles}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          sx={styles}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={styles}
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TextFieldComponent