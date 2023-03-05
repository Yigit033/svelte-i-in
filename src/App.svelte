
	
	
	
	
	
	
	
					 PROJE TASK MANAGER
					İLK ÖNCE VERDİĞİ GİTHUB RESOURCE YI İNCELE NELER YAPTIĞINA BAK SONRA KENDİN
				!!! ==>>>   BİRŞEYLER DENEMEYE ÇALIŞ 
			SONRASINDA ZATEN VİDEODAN YARDIM ALIRSIN-->
	
	
	
	
	
	
	
	
	<!-- Data Fetch İçin -->

<!-- 
<script>
	import {onMount} from "svelte"

	let datas = []

	onMount(async () => {
		const fetchiçin = await fetch("https://jsonplaceholder.typicode.com/todos")
		datas = await fetchiçin.json()
	})
</script>

<div>
	{#each datas as data (data.id) }

	<span> {data.id} </span>
		<p>{data.title}</p>
		
	{/each}
</div> -->







			<!-- Slot İşlemi -->


<!-- <script>
	import Card2 from "./components/card2.svelte";
</script>


<div>

	<Card2>
		<input type="text" placeholder="Yazınız..">
	</Card2>
	<br> <hr> <br>
	<Card2>
		<button> Tıklayınız! </button>
	</Card2>
	<br> <hr> <br>
	<Card2>

	</Card2>

</div> -->









						 Class Yapısı -->


<script>
	let tab = "MeyveListesi"
	let MeyveListesi = ["elma","armut", "kiraz", "muz"]
	let SebzeListesi = ["ıspanak","marul", "domates", "havuç"]

</script>


<div>
	<span class={tab === "MeyveListesi" ?  "Seçilen":""} on:click={() => tab = "MeyveListesi"} > Meyve Listesi </span>
	<span class={tab === "SebzeListesi" ?  "Seçilen":""} on:click={() => tab = "SebzeListesi"}> Sebze Listesi </span>

</div>

{#if tab ==="MeyveListesi"}
	{#each MeyveListesi as item (item)}
		<li>{item}</li>
	{/each}
	{:else}
	{#each SebzeListesi as item (item)}
		<li>{item}</li>
	{/each}
{/if}

<style>
	div{
		display: flex;
		padding: 40px;
		justify-content: space-between;
	}

	span{
		cursor: pointer;
	}

	.Seçilen{
		border-bottom: 2px solid red;
	}

	li{
		width: 25%;
		padding-left: 5px;
		border: 2px solid;
	}
</style>










			<!-- Store Örneği -->

<!-- 
<script>
	import Header from "./components/header2.svelte"
    import { products, sepet } from "./components/store.js";
	
	const SepeteEkle =(id) =>{
		products.update(mystoks=> {
			let productlarıkopyala = [...mystoks]
			let productugüncelle = productlarıkopyala.find((product) => product.id == id)
			if(productugüncelle.adet > 0){
				productugüncelle.adet --;
				// Eksi eksi burada 1 tane azalt demek
				sepet.update(value => value +1)
			}
			return productlarıkopyala;
			
	})
	}
	
</script>


<Header />
 <br><br><br>
{#each $products as product (product) }

	<div>
		<h3>{product.title}</h3>
		<span > Stokta {product.adet} tane {product.title} bulunmaktadır! </span>
		<button disabled={!product.adet} on:click={() => SepeteEkle(product.id,sepet)}>Sepete Ekle</button>
		<!-- Disabled Özelliği ile ürün sayısı 0 olduğunda button inaktif olur. 
		<hr><hr>
	</div>
	
{/each} -->















		<!-- Store -->

<!-- <script>
	import Arttır from "./components/arttır.svelte";
	import Azalt from "./components/azalt.svelte";
	import Reset from "./components/Reset.svelte";
	import {count} from "./components/store.js" 
	

</script>



<div>
	<p>Sayı: {$count}</p>
	<Arttır/>
	<Azalt/>
	<Reset/>

</div> -->










				<!-- Bind İşlemleri -->


<!-- 
<script>
    import { each } from "svelte/internal";

	let name = "Yiğit"

	let ForCompleted = false



	let GroupCompleted = false
	let görevler = ["Çöpü Dök", "Alışveriş Yap!", "Evi Topla", "Ödevlerini Bitir"]
	let Görev = "Yapılması Gerekenler"
	let YapılmışOlanlar = []


	let text = ""



	let sorular = [
		{id:1, text : "Sevidiğin kitap?"},
		{id:2, text : "Tuttuğun takım?"},
		{id:3, text : "Favori rengin?"}
		]
	let seçilen_soru;
	let Cevap = ""
	let Tablo = []
	const Submitiçin = () => {
		Tablo = [{TabloSoru:seçilen_soru,TabloCevap:Cevap}, ...Tablo]
		Cevap = ""
	}
</script>



<input type="text" bind:value={name} > = Text
<h1>{name}</h1>

<label>
	<input type="checkbox" bind:checked={ForCompleted}> 
	<span class= {ForCompleted ? "line" : "false"}> Markete Git! </span>
	<!-- burada soru işareti true ise demek, iki nokta işareti değil ise demek 
	Burada sadece tek bir görev için "to do list" yaptık şimdi için ise group olarak yapacağız
</label>

<br><br>		



<input type="text" bind:value={Görev} > = Gerekli Olanlar

<h1> {Görev} </h1>
{#each görevler as görev (görev) }
	<label>
		<input type="checkbox"
		name="görev" 
		value={görev}
		bind:group={YapılmışOlanlar}>
		<!-- bind:checked={GroupCompleted}> 
		{görev}
	</label>
{/each}



<h2>Yapılmış olanlar</h2>
{#each YapılmışOlanlar as yapılmışolanlar  (yapılmışolanlar)}
	<li>{yapılmışolanlar}</li>
{:else}
<h4>Sipariş Henüz Yok</h4>
	
{/each}



<textarea name="text" bind:value={text}></textarea>

<p>{text}</p>


<form on:submit|preventDefault={Submitiçin}>
	<select bind:value={seçilen_soru}>
	{#each sorular as soru (soru.id) }
		<option value={soru.text}>{soru.text}</option>
	{/each}
</select>
<input type="text" bind:value={Cevap}>
<button type="submit"> Submit </button>
</form>


<table>
	<tr>
		<th> Soru </th>
		<th> Cevap </th>
	</tr>

	{#each Tablo as item (item)}

	<tr>
		<td>{item.TabloSoru}</td>
		<td>{item.TabloCevap}</td>
	</tr>
		
	{/each}
</table>



<style>
	input{
		margin: 10px;
	}
	.line{
		text-decoration: line-through;
	}

	table,th,td{
		border: 2px solid ;
	}
</style> -->

















				<!-- Events -->



<!-- <script>
	import Header from "./components/header.svelte"
	import Body from "./components/body.svelte";
	import Footer from "./components/footer.svelte";
	import Tabela from "./components/tabela.svelte";
	import Card from "./components/card.svelte";
    import {each}  from "svelte/internal";
	const CardInfo = {
		Production_Name : "Headpone",
		Price : "$15",
		Explanation : "New Brand"
	}
	
	let sayı = 0;
	const arttır = () => {
		sayı += 1
	}
	const azalt = () => {
		sayı -= 1
	}

	let isim = "Ekmeleddin"
	let soyisim = "Ihsanoğlu"
	$: full_isim = isim+ " "+ soyisim
	// let yerine $ işaretini kullanarak bunu reactive şekilde yapıyorum (entegreli bir şekilde)


	let my_sayı = 0;
	$: click = my_sayı
	const handleClick = () => {
		my_sayı += 1
	}

	let user = false
	const toggle = () => {
		user = !user
	}

	let kitaplar = [
		{id:1, isim:"Istanbul Hatırası", yazar: "Ahmet Hamdi Tanpınar"},
		{id:2, isim:"Ankara Hatırası", yazar: "Mehmet Hamdi Tanpınar"},
		{id:3, isim:"Izmir Hatırası", yazar: "Veli Hamdi Tanpınar"}
	]
	import MyCard from "./components/MyCard.svelte";
    import Header1 from "./components/header1.svelte";

	const handleClickk = () => {
		kitaplar = kitaplar.slice(1)
	}

	let konum = { x:0, y: 0};
	const handleClick1 = (event) => {
		console.log(event);
		konum.x = event.clientX
		konum.y = event.clientY
	}

	

	const ButtonTıkla = () => {
		alert("Herkese Merhaba ")
	}

	import Header2 from "./components/header1.svelte"
	let modum = "light"

	const moduDegiştir = (event) =>{
		if(modum === "light"){
			modum = event.detail.yeniMode
		}else{
			modum = "light"
		}
	}

	import Outer from "./components/outer.svelte";
	const clickbas = (event) =>{
		alert(event.detail.text)
	}

	import Modals from "./components/modals.svelte";
	let ModalAç = false

	const OpenModal = () => {
		ModalAç = true
	}

	const CloseModal = () => {
		ModalAç = false
	}

</script>




<Header />
<Body />
<Footer />



<h1>  sayı = {sayı} </h1>
<Tabela {sayı} />
<!-- Alttaki props yöntemini kullanarak yaptığım button oldu ==> python daki kendi modulümüzü oluşturduğumuz gibi -->

<!-- 

<button on:click={arttır}> Arttır (+)  </button>
<button on:click={azalt}> Azalt (-)  </button>


<Card
production_name = {CardInfo.Production_Name},
price = {CardInfo.Price},
explanation = {CardInfo.Explanation}
/>

<!-- <Card {... CardInfo} />
Böyle yaparak ve yukarıdaki cost CardInfo kısmını silerek çok daha basit bir şekil de 
aynı şeyleri yapabiliriz -->

<!-- <input type="text" bind:value={isim}>
 Burada yaptığımız şey sayfada istediğimiz şeyi yazdığında bağlı bulunan string de değişir -->
<!--
<h1> isim : {isim}</h1>
<h1> soyisim : {soyisim}</h1>
<h1> tam isim = {full_isim}</h1>


<button on:click={handleClick}>
	{my_sayı} kez tıklandı!
</button>

<p> {click}
</p>


{#if !user}
<button on:click={toggle}> LOGIN </button>	

{:else}
<button on:click={toggle}> LOGOUT </button>	

{/if}

<br> <br> -->

<!-- 

{#each kitaplar as kitap (kitap.id) }
	 <div>
		<h4>{isim}</h4>
		<h4>{yazar}</h4>
	</div> -->
	<!-- MyCard isim = {kitap.isim} yazar = {kitap.yazar} -->
<!--
	<MyCard {...kitap} />
{:else}
Elimizde kaldırılacak bir kitap kalmadı!
{/each}

<br> <br>

<button on:click={handleClickk}>
	Kitapları en baştan kaldır
</button>




<main>

</main> -->
	



<!-- 
<div on:mousemove={handleClick1}>
<h1>x: {konum.x}</h1>
<h1>y: {konum.y}</h1>
</div>





<br><br><br><br><br>


<button on:click|once={ButtonTıkla}>
	 Burada |once yapmamın sebebi gelecek tepkinin sadece bir defa gelmesini istediğim için  -->
	 <!--
	Tıkla
</button>

<form on:submit|preventDefault>
	<input type="text">
	<button type="submit">Submit</button>
</form> -->

<!-- bu on:click ve on:submit teki once ve preventDefault gibi şeyler bizim motiflerimizdir
Yani senaryoya göre çözüm yolları üretiriz. Daha fazlasını öğrenmek istersem svelte de documantlardan öğrenebilirim. -->

<!--
<div class = {modum === "light" ? "light" : "dark"} >
	<Header2 on:benimmodum={moduDegiştir}/>
	 on:benimmodum u kendime modul yaptım mesela pythonda da yapıyorduk benzeri işleri -->
	<!-- bu konu dispatcher konusuydu biraz karışıktı anladım ama daha iyi kavramak için zaten projelerde kullanıcam 
</div>




<style>
	div{
		width: 100%;
		height: 100%;
		background-color: rgba(0, 109, 128, 0.548);
	}

	#id{
		width: 100%;
		height: 100%;
	}

	.light{
		background-color: #fff;
		color: black;
	}
	.dark{
		background-color: black;
		color: #fff;
	}
</style>



<Outer on:mesaj= {clickbas}/>
<!-- Burada dispatch işleminde forward nasıl oluyor onu anlıyoruz 



<button on:click={OpenModal}>Button Aç</button>
<Modals {ModalAç} on:click={CloseModal}/> 

-->


 























<!-- <script>
	export let name;
	let isim = "Yiğit"
</script>

<main>
	<h1>Hello {isim}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style> -->
