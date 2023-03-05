<script>

    import {createEventDispatcher} from "svelte";
    
    const dispatch = createEventDispatcher()

    const dispatchiçin = () => {
        dispatch("benimmodum", {yeniMode:"dark"})
    }

</script>


<div id="id">
    <h1>HEADER</h1>
    <button on:click={dispatchiçin} > Change Mode</button>
</div>