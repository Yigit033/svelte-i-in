<script>
   import { count } from "./store.js";
   const SayıArttır = () =>{
    count.update(myvalue => myvalue +1 )
   }
</script>

<button on:click={SayıArttır}> + </button>