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
    slider: {
      template: `
        <div class="block">
          <div v-if="content.heading" class="block-heading">
              <h2>
                <k-writer
                    v-bind="field('heading')"
                    :inline="true"
                    :marks="false"
                    :nodes="false"
                    :value="content.heading"
                    @input="update({ heading: $event })">
                </k-writer>
              </h2>
          </div>
          <div v-if="content.copy" class="block-text">
              <div class="text">
                <k-writer
                  v-bind="field('copy')"
                  :value="content.copy"
                  @input="update({ copy: $event })">
                </k-writer>
              </div>
          </div>
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