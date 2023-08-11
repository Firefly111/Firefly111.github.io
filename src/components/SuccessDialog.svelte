<script lang="ts">
import {fade} from "svelte/transition";
import {remainingLetters, stopPrompt, timer} from '../stores/prompt';
import { Confetti } from "svelte-confetti"




let winningText = "";
const winningPrompts: string[] = [
"You do not suck!",
"A high degree of intellect tends to make a man unsocial.",
"Enjoy the brief dopamine rush!",
"May you win more than just games in life.",
"Abundance of knowledge does not teach men to be wise.",
"He who knows all the answers has not been asked all the questions.",
];

function userWon() {
	const random_index = Math.floor(Math.random() * winningPrompts.length)
	winningText = winningPrompts[random_index]
}

let isWon = false;
remainingLetters.listen((rL)=>{
	if (rL.length===0) {
		userWon()
		stopPrompt()
		isWon = true;
	} else {
		isWon = false
	}
})

timer.subscribe((time)=>{
	if(time!=0) {
		isWon = false
	}
})
</script>

{#if isWon}
<dialog open transition:fade>
    <Confetti infinite/>
		<div id="winning-text">{winningText}</div>
    <Confetti infinite/>
</dialog>
{/if}
 

<style>
	#winning-text {
		font-family: cursive;
		max-width: 50%;
		font-size: 300%;
		font-weight: bold;
		
		color: transparent;
		background-image: linear-gradient(to left, #FDDA0D, #F4BB44);
		background-clip: text;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		display: inline-block;
	}
</style>
