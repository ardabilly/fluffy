<template>
	<section>
		<calendar-view
			:show-date="showDate"
			@click-date="onDateClick"
			class="theme-default">
			<div
				slot="header"
				slot-scope="{ headerProps }"
				class="cv-header"
			>
				<el-row :gutter="20">
					<el-col :span="8">
						<div class="cv-header_title">
							{{ headerProps.periodLabel }}
						</div>
					</el-col>
					<el-col :span="12" :offset="4">
						<el-button-group>
							<el-button type="primary" size="small" icon="el-icon-arrow-left" @click="setShowDate(headerProps.previousPeriod)"></el-button>
							<el-button type="primary" size="small" icon="el-icon-arrow-right" @click="setShowDate(headerProps.nextPeriod)"></el-button>
						</el-button-group>
						<el-button-group>
							<el-button type="primary" size="small" @click="setShowDate(headerProps.currentPeriod)">Today</el-button>
						</el-button-group>
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
        showDate: new Date()
      }
		},
		methods: {
			setShowDate(d) {
				this.showDate = d
				console.log(d)
			},
			onDateClick(d) {
				console.log(d)
			}
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