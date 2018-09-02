<template>
	<section>
		<calendar-view
			:show-date="showDate"
			:display-period-uom="displayPeriodUom"
			:events="events"
			@click-date="onDateClick"
			@click-event="onEventClick"
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
		</calendar-view>
	</section>
</template>

<script>
	export default {
		data () {
			return {
				showDate: new Date(),
				displayPeriodUom: 'month'
      }
		},
		computed: {
			events () {
				return this.$store.state.events
			}
		},
		methods: {
			setShowDate(d) {
				this.showDate = d
				console.log(d)
			},
			setDateType(d) {
				this.displayPeriodUom = d
			},
			onDateClick(event) {
				const hasEvents = this.getEvents(event)

				console.log(hasEvents)
				this.$store.commit('SET_EVENT_DETAIL', null)
			},
			onEventClick({ originalEvent }) {
				this.$store.commit('SET_EVENT_DETAIL', originalEvent)
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
			// this.$store.commit('SET_EVENT', {
			// 	id: 1,
			// 	startDate: '2018-9-1 00:00:00',
			// 	endDate: '2018-9-2 00:00:00',
			// 	title: 'First Event',
			// 	description: 'Learn and create something on weekend, cause we can\'t wasting a time.',
			// 	url: '/',
			// 	tags: ['Coding', 'On', 'Weekend'],
			// 	location: [-6.1780807,106.8181091]
			// })
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
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>