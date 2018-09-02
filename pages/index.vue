<template>
	<section>
		<el-card shadow="never">
			<el-row :gutter="20">
				<el-col :span="8">
					<el-button-group>
						<el-button type="primary" size="small" icon="el-icon-arrow-left"></el-button>
						<el-button type="primary" size="small" icon="el-icon-arrow-right"></el-button>
					</el-button-group>
					<el-button-group>
						<el-button type="primary" size="small">Today</el-button>
					</el-button-group>
				</el-col>
				<el-col :span="12" :offset="4">
					<!-- Add some action here -->
				</el-col>
			</el-row>
		</el-card>
		<el-card>
			<calendar-view
				:show-date="showDate"
				class="theme-default">
			</calendar-view>
		</el-card>
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

<style lang="scss">
	.el-card {
		margin-bottom: 1rem;
		
		.el-button-group {
			margin-right: .5rem;

			&:last-child {
				margin-right: 0;
			}
		}
	}
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