<script>
    
    import { count } from "./store";

    const SayıAzalt=()=>{
        count.update(myvalue => myvalue- 1)
    }
</script>

<button on:click={SayıAzalt}> - </button>