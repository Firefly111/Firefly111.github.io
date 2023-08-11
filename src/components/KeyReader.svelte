<script lang="ts">
import { guessedLetters, timer } from "../stores/prompt";
</script>

<svelte:window
    on:keydown|preventDefault={(keyEv)=>{
        if($timer === 0) return;

        const key = keyEv.key.toLowerCase();

        if (key.length !== 1) return; // consider only letters

        const oldGuessedLetters = guessedLetters.get();

        if (oldGuessedLetters.includes(key)) return;

        guessedLetters.set([...oldGuessedLetters, key])
    }}/>
