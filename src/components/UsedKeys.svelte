<script lang="ts">
import {validatedLetters} from "../stores/prompt";
</script>

<div class="wrongLetters grid">
    {#each $validatedLetters.wrongLetters as letter}
        <div>{letter}</div>
    {/each}
</div>
<div class="correctLetters grid">
    {#each $validatedLetters.correctLetters as letter}
        <div>{letter}</div>
    {/each}
</div>

<style>
    .grid {
        display: flex;
        flex-flow: row wrap;
        font-weight: 500;
        gap: 0.2em;
        font-size: 50px;
    }
    .wrongLetters {
        color: red;
    }
    .correctLetters {
        color: green;
    }
</style>