<script>

    import {createEventDispatcher}  from "svelte"

    const dispatch  = createEventDispatcher()
    const selamGonder = () =>{
        dispatch("mesaj",{text:"Merhaba"} )
    }

</script>

<h1>
    Inner
</h1>

<button on:click={selamGonder} > 
    Selam Gönder
</button>