<script lang="ts">
import { validatedLetters, promptData, guessedLetters } from "../stores/prompt";

let words: string[] = []
$: words = $promptData.prompt.split('').map((letter)=>{
    if (letter === " ") return " ";
    if ($validatedLetters.correctLetters.includes(letter)){
        return letter
    }
    return "_"
}).join('').split(' ')

function isLastKey(letter: string) {
    return $guessedLetters.at(-1) === letter
}

</script>
<div>
    <div id="word-grid">
        {#each words as word}
            <div class="word">
                {#each word as letter}
                    <div class="letter"
                    class:lastkey={isLastKey(letter)}
                    >{letter}</div>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    #word-grid {
        display: flex;
        flex-flow: row wrap;
        gap: 2em;
    }
    .word {
        display: flex;
        flex-flow: row nowrap;
        gap: 0.5em;
    }
    .letter {
        font-family: monospace, monospace;
        font-weight: 400;
        font-size: 50px;
        text-decoration: underline;
    }
    .lastkey {
        color: greenyellow;
    }
</style>