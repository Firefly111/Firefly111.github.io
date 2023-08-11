<script lang="ts">
	import {stopPrompt, timer, validatedLetters} from "../stores/prompt"

	import h0 from "../assets/hangman/0.jpg"
	import h1 from "../assets/hangman/1.jpg"
	import h2 from "../assets/hangman/2.jpg"
	import h3 from "../assets/hangman/3.jpg"
	import h4 from "../assets/hangman/4.jpg"
	import h5 from "../assets/hangman/5.jpg"
	import h6 from "../assets/hangman/6.jpg"
	import h7 from "../assets/hangman/7.jpg"
	import h8 from "../assets/hangman/8.jpg"
	import h9 from "../assets/hangman/9.jpg"
	import h10 from "../assets/hangman/10.jpg"
	import {fade} from "svelte/transition"


	let losingText = "";
	const losingPrompts: string[] = [
		"Samsara sucks!",
		"The safest way of not being very miserable is not to expect to be very happy.",
		"Failure is instructive. The person who really thinks learns quite as much from his failures as from his successes.",
		"Error is the price we pay for progress.",
		"To be truly happy and contented, you must let go of the idea of what it means to be truly happy or content.",
		"The peaceful rest in happiness, giving up both victory and defeat.",
		"Be content with what you have, rejoice in the way things are, when you realize there is nothing lacking, the whole world belongs to you.",
	];

	function userLost() {
		const random_index = Math.floor(Math.random() * losingPrompts.length)
		losingText = losingPrompts[random_index]
	}

	let isLost = false;
	// let images = [h0, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10]

	let images = [h0, h3, h4, h5, h6, h7, h8, h9, h10]
	let currentImage = h0
	validatedLetters.listen(({wrongLetters})=>{
		const mistakes = wrongLetters.length
		if (mistakes >= images.length - 1) {
			userLost()
			stopPrompt()
			isLost = true;
		}
		currentImage = images[mistakes]
	})

	timer.subscribe((time)=>{
		isLost = (time===0)? true: false;
	})
</script>


<div hidden>
	{#each images as preloadImg}
		<img src="{preloadImg}" alt="hangman" width="200"/>
	{/each}
</div>

{#if isLost}
<dialog open transition:fade>
	<div id="losing-text">
		{losingText}
	</div>
</dialog>
{/if}

<img src="{currentImage}" alt="hangman" width="200"/>

<style>
	#losing-text {
		color: red;
		font-family: cursive, sans-serif;
		max-width: 50%;
		font-size: 300%;
		font-weight: bold;
	}
</style>
