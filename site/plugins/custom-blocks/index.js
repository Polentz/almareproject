panel.plugin("almareproject/custom-blocks", {
  blocks: {
    menu: {
      template: `
        <div class="menu-block">
          <p>Column</p>
        </div>
      `
    },
    event: {
      template: `
        <div class="input-wrapper">
          <k-input
            v-bind="field('date')"
            :value="content.date"
            @input="update({ date: $event })">
          </k-input>
          <k-input class="input-title"
            v-bind="field('title')"
            :value="content.title"
            @input="update({ title: $event })">
          </k-input>
        </div>
      `
    },
    audio: {
      template: `
        <div class="input-wrapper">
          <k-input class="input-title"
            v-bind="field('title')"
            :value="content.title"
            @input="update({ title: $event })">
          </k-input>
        </div>
      `
    }
  }
});