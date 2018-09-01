<template>
  <el-card>
		<calendar-view
			:show-date="showDate"
			class="theme-default">
		</calendar-view>
  </el-card>
</template>

<script>
	export default {
		data () {
			return {
        showDate: new Date()
      }
		},
		methods: {
			setShowDate(d) {
				this.showDate = d
			}
		}
	}
</script>
