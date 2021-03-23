<template>
  <div class="v-home">
    <div class="content">
      <h2 class="h2">Гланое</h2>
      <p class="p">Это интернет-магазины, в которых более 1000, 10000 или 100000 товаров. Такие интернет-магазины торгуют, как правило,товарами разных брендов, от игрушек до техники. Очень сложно прийти на рынок с не уникальными товарами и преподносить их как уникальные. Такой подход смысла не имеет. Обычно в мегамаркете покупатель выбирает товар по цене, удобным условиям оплаты / рассрочки, смотрит на условия доставки, на гарантию. И вот тут есть где отстроиться от конкурентов. При подготовке текстов помните, что товары в больших магазинах не уникальны. Ищите преимущества для покупателя в другом.</p>
      <router-link class="btn" to="/catalog">Каталог</router-link>
    </div>
    <img src="../../assets/2.svg" class="image">
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss">
.v-home {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 100px 100px 100px;
  .content {
    max-width: 700px;
  }
  .image {
    filter: invert(1);
    max-width: 400px;
    margin-left: 50px;
  }
}

@media (max-width: 991px) {
  .v-home {
    padding: 130px 10px 100px;
    flex-direction: column-reverse;
    .image {
      max-width: 60%;
      margin-left: 0px;
    }
    .content {
      width: 80%;
      h2 {
        font-size: 2em;
      }
    }
  }
}
</style>