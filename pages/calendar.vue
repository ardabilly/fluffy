<template>
	<section>
		<calendar-view
			:show-date="showDate"
			:display-period-uom="displayPeriodUom"
			:events="eventList"
			@click-date="onDateClick"
			class="theme-default">
			<div
				slot="header"
				slot-scope="{ headerProps }"
				class="cv-header"
			>
				<el-row :gutter="20">
					<el-col :span="5">
						<el-button-group>
							<el-button type="primary" size="small" icon="el-icon-arrow-left" @click="setShowDate(headerProps.previousPeriod)"></el-button>
							<el-button type="primary" size="small" icon="el-icon-arrow-right" @click="setShowDate(headerProps.nextPeriod)"></el-button>
						</el-button-group>
					</el-col>
					<el-col :span="10">
						<div class="cv-header_title">
							{{ headerProps.periodLabel }}
						</div>
					</el-col>
					<el-col :span="9">
						<el-button plain type="success" size="small" @click="setShowDate(headerProps.currentPeriod)">Today</el-button>
						<el-button plain type="primary" size="small" @click="setDateType('week')">Week</el-button>
						<el-button plain type="primary" size="small" @click="setDateType('month')">Month</el-button>
					</el-col>
				</el-row>
			</div>
			<div
				slot="dayContent"
				slot-scope="day"
				v-if="getEvents(day.day).length > 1"
				class="cv-day-info"
			>
				{{ getEvents(day.day).length }} events
			</div>
		</calendar-view>
	</section>
</template>

<script>
	export default {
		data () {
			return {
				showDate: new Date(),
				displayPeriodUom: 'month',
				eventList: []
      }
		},
		computed: {
			events () {
				return this.$store.state.events
			}
		},
		watch: {
			events (newValue) {
				this.eventList = newValue
			}
		},
		methods: {
			setShowDate(d) {
				this.showDate = d
			},
			setDateType(d) {
				this.displayPeriodUom = d
			},
			onDateClick(event) {
				const hasEvents = this.getEvents(event)

				this.$store.commit('SET_EVENT_LIST', {
					events: hasEvents,
					date: event
				})
			},
			getEvents (date) {
				const unique = new Date(date).getTime()
				const { events } = this.$store.state
				const bracket = []

				events.map(item => {
					const { startTimestamp, endTimestamp } = item

					if (unique >= startTimestamp && unique <= endTimestamp) {
						bracket.push(item)
					}
				})

				return bracket
			}
		},
		mounted () {
			this.eventList = this.events
		},
		beforeRouteLeave (to, from, next) {
			this.$store.commit('SET_ASIDE', false)
			next()
		}
	}
</script>

<style lang="scss">
  .el-row {
		margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
</style>