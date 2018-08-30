<template>
  <section>
		<calendar-view
			:show-date="showDate"
			class="theme-default holiday-us-traditional holiday-us-official">
			<calendar-view-header
				slot="header"
				slot-scope="t"
				:header-props="t.headerProps"
				@input="setShowDate" />
		</calendar-view>
  </section>
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
