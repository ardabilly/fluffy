<template>
  <section class="el-detail">
    <el-button icon="el-icon-back">Back</el-button>
    <div class="line"></div>

    <!-- Have events -->
    <section>
      Have events
    </section>
    
    <!-- Detail events -->
    <section>
      Detail events
    </section>
    
    <!-- Add events -->
    <section>
      Add events
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    event () {
      return this.$store.state.eventDetail
    }
  }
}
</script>

