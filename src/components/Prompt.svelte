<script lang="ts">
    import { promptData } from "../stores/prompt";
</script>

<div>
    {#if $promptData.status==='inactive'}
        <span style="color: gray;">Last Prompt:</span>
    {:else}
        <span style="color: green;">Active Prompt:</span>
    {/if}

    <span id="prompt">{$promptData.prompt}</span>
</div>

<style>
    #prompt {
        font-family: monospace, monospace;
        padding-left: 0.5em;
    }

    div {
        font-size: xx-large;
    }
</style>