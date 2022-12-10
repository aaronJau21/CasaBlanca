<template>
  <a href="https://api.whatsapp.com/send?phone=966389211" class="btn-wsp" target="_blank">
    <i class="fa-brands fa-whatsapp"></i>
  </a>
</template>

<script>
export default {
    name: 'FabComponent'
}
</script>

<style lang="scss" scoped>
a{
    position: fixed;
    width: 50px;
    height: 50px;
    line-height: 55px;
    bottom: 30px;
    right: 30px;
    background-color:#078500 ;
    color: #fff;
    border-radius: 50px;
    text-align: center;

    i{
        font-size: 25px;
        box-shadow: rgba($color: #000000, $alpha: 0.3);
        z-index: 100;
    }

    &:hover{
        text-decoration: none;
        color: #078500;
        background-color: #fff;
    }
}
</style>