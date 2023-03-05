<script>
    import { count } from "./store.js";

    const SayıReset =() => {
        count.set(0)
    }

</script>

<button on:click={SayıReset}> Reset </button>