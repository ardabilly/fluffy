<template>
  <section>
    <el-dialog width="40%" title="Create Event" :visible="dialogVisible">
      <el-form
        label-position="left"
        ref="form-event-add"
        label-width="120px"
      >
        <el-form-item label="Title">
          <el-input v-model="form.title" placeholder="Write title here ..."></el-input>
        </el-form-item>
        <el-form-item label="Dates">
          <el-date-picker
            style="width: 100%;"
            v-model="form.dateRange"
            type="daterange"
            :unlink-panels="true"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" rows="4" v-model="form.description" placeholder="Some description of event ..."></el-input>
        </el-form-item>
        <el-collapse v-model="activeIndex" accordion>
          <el-collapse-item title="Advance Options?" name="1">
            <div class="line"></div>
            <el-form-item label="Labels">
              <el-select v-model="form.tags" multiple collapse-tags placeholder="Please select a labels">
                <el-option :label="label.text" :value="key" v-for="(label, key) in labels" :key="key"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="External URL">
              <el-input v-model="form.url">
                <template slot="prepend">https://</template>
              </el-input>
            </el-form-item>
            <el-form-item label="Locations">
              <el-card shadow="never">
                Google maps
              </el-card>
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">Cancel</el-button>
        <el-button type="primary" @click="saveEvent">Create</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
  export default {
    computed: {
      events () {
        return this.$store.state.eventList
      },
      dialog () {
        return this.$store.state.eventAdd
      },
      labels () {
        return this.$store.state.labels
      }
    },
    data() {
      return {
        activeIndex: null,
        form: {
          url: '',
          tags: [],
          title: '',
          description: '',
          dateRange: [],
          location: ''
        },
        dialogVisible: false
      };
    },
    watch: {
      dialog (newValue) {
        this.dialogVisible = newValue
      },
      events (newValue) {
        if (newValue.date) {
          console.log(newValue.date)
          this.form.dateRange[0] = new Date(newValue.date)
          this.form.dateRange[1] = new Date(newValue.date)

          console.log('this.form', this.form)
        }
      }
    },
    methods: {
      resetEvent () {
        this.form = {
          url: '',
          tags: [],
          title: '',
          description: '',
          dateRange: [],
          location: ''
        }
      },
      closeDialog () {
        this.resetEvent()
        this.$store.commit('SET_EVENT_DIALOG', false)
      },
      saveEvent () {
        const data = this.form
        const { events } = this.$store.state
        const event = {
          id: events.length + 1,
          startDate: new Date(data.dateRange[0].toString()).toISOString(),
          endDate: new Date(data.dateRange[1].toString()).toISOString(),
          startTimestamp: new Date(data.dateRange[0].toString()).getTime(),
          endTimestamp: new Date(data.dateRange[1].toString()).getTime(),
          title: data.title,
          description: data.description,
          url: data.url,
          tags: [],
          location: data.location
        }

        data.tags.map((item, index) => {
          event.tags[index] = this.labels[item]
        })

        this.$store.commit('SET_EVENT', event)
        this.resetEvent()
        this.$store.commit('SET_EVENT_DIALOG', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-collapse .el-collapse-item__content {
  padding-bottom: 0;
}
.line {
  border-bottom: 1px solid #ebeef5;
  margin-bottom: 1rem;
}
</style>

