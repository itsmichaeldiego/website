<template>
  <Wrapper src="/mike_alfa.png" />
</template>

<script>
  import styled from 'vue-styled-components';

  const Wrapper = styled.img`
    margin: 15px;
    width: 245px;
    height: 245px;
  `;

  export default {
    components: {
      Wrapper
    }
  };
</script>
