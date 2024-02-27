panel.plugin("almareproject/custom-blocks", {
  blocks: {
    menu: {
      template: `
        <div class="k-table menu-block">
          <table>
            <tbody>
              <tr>
                <td data-mobile="true" class="k-table-index-column">
                  <div class="k-table-index">#</div>
                </td>
                <td data-mobile="true" class="k-table-cell k-table-column" style="width: auto;">
                  <p class="k-text-field-preview">  Dropdown menu column: open to change the content  </p>
                </td>
                <td data-mobile="true" class="k-table-options-column">
                  <div class="k-options-dropdown">
                    <button data-has-icon="true" title="Options" type="button" aria-haspopup="menu" data-dropdown="true" class="k-button k-options-dropdown-toggle">
                      <span class="k-button-icon"><svg aria-hidden="true" data-type="dots" class="k-icon"><use xlink:href="#icon-dots"></use></svg></span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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