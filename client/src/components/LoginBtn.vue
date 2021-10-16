<template>
  <div>
    <button class="button">Please Login</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.button{
    width:340px;
    border-radius: 0px;
    font-size: 16px;
    margin-top:10px;
    background: #0080ff;

    height: 40px;
    display: inline-block;
    border:0px;

    color: #fff;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.button:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #054D8F;
  border-radius: 0rem;
  z-index: -2;
}
.button:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #0300B3DE;
  transition: all 0.3s;
  border-radius: 0rem;
  z-index: -1;
}
.button:hover {
  color: #fff;
}
.button:hover:before {
  width: 100%;
}




</style>