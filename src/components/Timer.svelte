<script lang="ts">
    import { promptData, timer} from "../stores/prompt";
</script>

<div class="text-gradient">
    {#if $timer === 0}
        {#if $promptData.status==='active'}
            <span style="color: red;">⏰ Time is Up!</span>
        {:else}
            <span style="color: grey">⏸️ Paused</span>
        {/if}
    {:else}
        <span>⌛ {$timer}</span>
    {/if}
</div>

<style>
    div {
        font-size: xx-large;
    }
    div > span {
        font-size: 50px;
        font-weight: bold;
    }
</style>