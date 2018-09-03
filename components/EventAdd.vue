<template>
  <section>
    <el-dialog title="Create Event" :visible="dialogVisible">
      <el-form :model="form">
        <el-form-item label="Title">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="form.description" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Date">
          <el-date-picker
            v-model="form.dateRange"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
        </el-form-item>
        <el-collapse v-model="activeIndex" accordion>
          <el-collapse-item title="Advance" name="1">
            <el-form-item label="Url">
              <el-input v-model="form.url" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Location">
              <el-input v-model="form.location" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Labels">
              <el-select v-model="form.tags" multiple collapse-tags placeholder="Please select a labels">
                <el-option :label="label.text" :value="key" v-for="(label, key) in labels" :key="key"></el-option>
              </el-select>
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
          location: []
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
