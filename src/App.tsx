import { BottomSheet, Button } from "components";
import { Container } from "layout";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Button
        label={open ? "Close Bottom Sheet" : "Open Bottom Sheet"}
        onClick={() => setOpen(!open)}
      />
      <BottomSheet open={open} title="Bottomsheet Title">
        <div className="my-4 w-full rounded-lg bg-red-400 p-5">content</div>
      </BottomSheet>
    </Container>
  );
}

export default App;
