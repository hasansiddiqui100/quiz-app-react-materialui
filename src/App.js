
import './App.css';
import React,{useState} from 'react';

// import { Menu as MenuIcon } from "@material-ui/icons";
import {AppBar,Box,Toolbar,Typography,IconButton,Button, Radio} from "@material-ui/core"
// import { RadioGroup ,FormControlLabel} from '@material-ui/core';


function App() {

  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]
  	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  	const [ value, setValue ] = useState('');
  	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography  variant="h6" color="inherit" component="div">
            Quiz-App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
	
	<Box>
		{showScore?(
			<Box >
				<Typography style={{fontSize:"3rem"}}>You scored {score} out of {questions.length}</Typography>
			</Box>
		):(
		<>
		<Box>
			<Box>
			<span>Question {currentQuestion + 1}</span>/{questions.length}
			</Box>
			<Box>
			{questions[currentQuestion].questionText}
			</Box>
		</Box>
		<Box>
			{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
		</Box>
		
		</>
		)}
		</Box>
		
	</>
  );
		}


export default App;
