<template>
  <div>
    <typeNav />

    <ListContainer />
    <Recommend />
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Brand from "./Brand";
import Floor from "./Floor";

export default {
  name: "",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor,
  },
};
</script>

<style>
</style>