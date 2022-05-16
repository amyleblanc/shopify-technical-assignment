import { useState } from "react";
import { useHistoryContext } from "./contexts/useHistoryContext";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import ResponseList from "./components/ResponseList";

export default function AskOpenAI() {
  const initial = "Tell me why Amy would be a great front end developer at Shopify."
  const subsequent = "Tell me MORE about why Amy would be a great front end developer at Shopify. She sounds pretty great! 😜"
  const [question, setQuestion] = useState(initial);
  const { history, setHistory } = useHistoryContext();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();

    const id = Math.random().toString(36).substr(2, 3);

    const newAnswer = {
      id,
      question,
      answer: data.answer,
    };

    setHistory(prevHistory => [newAnswer, ...prevHistory])
    setQuestion(subsequent);
  }

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 500, maxHeight: 550 }}>
            <CardMedia
              component="img"
              height="350"
              image="/amy-shopify.gif"
              alt="woman typing"
            />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Ask OpenAI a Question"
                  multiline
                  maxRows={4}
                  name="question"
                  value={question}
                  onChange={handleChange}
                />
                <br/>
                <Button variant="contained" color="success" type="submit">
                  Generate Answer
                </Button>
              </form>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {history && <ResponseList />}
        </Box>
      </Box>
    </>
  );
}
