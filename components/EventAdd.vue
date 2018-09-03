<template>
  <section>
    <el-dialog width="40%" title="Create Event" :visible="dialogVisible">
      <el-form
        label-position="left"
        ref="form-event-add"
        label-width="120px"
        model="form"
      >
        <el-form-item label="Title">
          <el-input v-model="form.title" placeholder="Write title here ..."></el-input>
        </el-form-item>
        <el-form-item label="Dates">
          <el-date-picker
            style="width: 100%;"
            v-model="form.dateRange"
            type="daterange"
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
        <el-button type="primary" @click="closeDialog">Confirm</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
  export default {
    computed: {
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
          dateRange: '',
          location: ''
        },
        formLabelWidth: '180px',
        dialogVisible: false
      };
    },
    watch: {
      dialog (newValue) {
        this.dialogVisible = newValue
      }
    },
    methods: {
      closeDialog () {
        this.$store.commit('SET_EVENT_DIALOG', false)
      }
    }
  };
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

