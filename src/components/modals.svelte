<script>
    import {fade} from "svelte/transition"
export let ModalAç;
</script>

{#if ModalAç}
    <div class="box" transition:fade >
     <div class="modal">
        <span>X</span>
        <h1>Modal</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque!</p>
    </div>
</div>
{/if}


<style>
    .box{
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: -50;
        left: 0;
        background-color: rgb(133,121,121);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal{
        position: relative;
        width: 30%;
        height: 300px;
        background: #fff;
        padding: 10px;
        border-radius:10px;
    }
    span{position: absolute;
        top: -20px;
        right: -20px;
        font-size: 20px;
        color: #fff;
        cursor: pointer;}
</style>