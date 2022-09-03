import React from 'react'

export default function CountAllowance() {
    const [name, setName] = useState("Cat in the Hat");
    const handleChange = (event) => {
      setName(event.target.value);
    };
    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={handleChange}
        />
      </Box>
    );
}
