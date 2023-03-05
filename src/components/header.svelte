<script>
  import Button from "./button.svelte";

</script>
<div class="header">
    <h1>BUTTON</h1>
    <Button />
    <ul>
        <li>About</li>
        <li>Docs</li>
        <li>Contact</li>
    </ul>
</div>

<style>
.header{
    background-color: gray;
    display: flex;
    
}
h1{
    flex: 1;
    size: 2px;
    
}
ul{
    display: flex;
    
    
}
li{
    margin: 20px;
}
</style>