<script lang="ts">
import { startPrompt, stopPrompt} from "../stores/prompt";

let currentPrompt: string;
let seconds: number = 60;
</script>

<div>
    <form on:submit|preventDefault={()=>{
        startPrompt(currentPrompt, seconds)
        currentPrompt = "";
    }}>
        <div class="grid">
            <input type="text" placeholder="Enter phrase" bind:value={currentPrompt} required>
        <input type="number" bind:value={seconds}>
        </div>
        <div class="grid">
            <input type="submit" value="Start">
            <button class="secondary"
                on:click|preventDefault={()=>{
                stopPrompt()
                }}>Stop</button>
        </div>
    </form>
</div>
